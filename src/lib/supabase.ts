import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { BrainrotEntry, NewBrainrotInput } from '../types/brainrot';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    /^https?:\/\//i.test(supabaseUrl) &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-supabase-anon-key')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function fetchBrainrots(): Promise<BrainrotEntry[]> {
  if (!supabase) {
    throw new Error('Supabase environment variables belum dikonfigurasi.');
  }

  const pageSize = 1000;
  const allRows: BrainrotEntry[] = [];
  let from = 0;

  while (true) {
    const { data, error } = await supabase
      .from('brainrots')
      .select('id, title, lore, category, image_url, upvotes, created_at')
      .order('created_at', { ascending: false })
      .range(from, from + pageSize - 1);

    if (error) {
      throw new Error(error.message || 'Gagal memuat data dari tabel brainrots.');
    }

    const batch = (data ?? []) as BrainrotEntry[];
    allRows.push(...batch);

    if (batch.length < pageSize) {
      break;
    }
    from += pageSize;
  }

  return allRows;
}

export async function seedFamousBrainrotsToSupabase(
  items: BrainrotEntry[],
  onProgress?: (inserted: number, total: number) => void
): Promise<number> {
  if (!supabase) {
    throw new Error('Supabase environment variables belum dikonfigurasi.');
  }

  const batchSize = 100;
  let inserted = 0;

  for (let i = 0; i < items.length; i += batchSize) {
    const chunk = items.slice(i, i + batchSize).map((item) => ({
      title: item.title,
      lore: item.lore,
      category: item.category,
      image_url: item.image_url,
      upvotes: item.upvotes,
      created_at: item.created_at,
    }));

    const { error } = await supabase.from('brainrots').insert(chunk);
    if (error) {
      throw new Error(
        error.message || `Gagal mengunggah batch ke-${i / batchSize + 1}.`
      );
    }

    inserted += chunk.length;
    onProgress?.(inserted, items.length);
  }

  return inserted;
}

export async function createBrainrot(
  input: NewBrainrotInput
): Promise<BrainrotEntry> {
  if (!supabase) {
    throw new Error('Supabase environment variables belum dikonfigurasi.');
  }

  const payload = {
    title: input.title.trim(),
    lore: input.lore.trim(),
    category: input.category,
    image_url: input.image_url?.trim() || null,
    upvotes: 0,
  };

  const { data, error } = await supabase
    .from('brainrots')
    .insert([payload])
    .select('id, title, lore, category, image_url, upvotes, created_at')
    .single();

  if (error) {
    throw new Error(error.message || 'Gagal menyimpan entri ke Supabase.');
  }

  return data as BrainrotEntry;
}

export const BRAINROT_BUCKET = 'brainrot-images';

export async function uploadBrainrotImage(file: File): Promise<string> {
  if (!supabase) {
    throw new Error('Supabase environment variables belum dikonfigurasi.');
  }

  const rawExt = file.name.split('.').pop()?.toLowerCase() ?? 'png';
  const safeExt = rawExt.replace(/[^a-z0-9]/g, '') || 'png';
  const uniqueId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const filePath = `uploads/${Date.now()}-${uniqueId}.${safeExt}`;

  const { error: uploadError } = await supabase.storage
    .from(BRAINROT_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || undefined,
    });

  if (uploadError) {
    throw new Error(
      uploadError.message ||
        `Gagal mengunggah gambar ke bucket ${BRAINROT_BUCKET}.`
    );
  }

  const { data } = supabase.storage
    .from(BRAINROT_BUCKET)
    .getPublicUrl(filePath);

  if (!data?.publicUrl) {
    throw new Error('Gagal mendapatkan public URL gambar dari Supabase.');
  }

  return data.publicUrl;
}

export async function upvoteBrainrot(
  id: string,
  currentUpvotes: number
): Promise<BrainrotEntry> {
  if (!supabase) {
    throw new Error('Supabase environment variables belum dikonfigurasi.');
  }

  // Try atomic RPC first if user created increment_brainrot_upvote in SQL Editor
  const rpcResult = await supabase.rpc('increment_brainrot_upvote', {
    row_id: id,
  });

  if (!rpcResult.error && rpcResult.data) {
    return rpcResult.data as BrainrotEntry;
  }

  // Fallback to direct row update so basic table setup works seamlessly
  const { data, error } = await supabase
    .from('brainrots')
    .update({ upvotes: currentUpvotes + 1 })
    .eq('id', id)
    .select('id, title, lore, category, image_url, upvotes, created_at')
    .single();

  if (error) {
    throw new Error(error.message || 'Gagal memperbarui jumlah upvote.');
  }

  return data as BrainrotEntry;
}
