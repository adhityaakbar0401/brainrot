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

  const { data, error } = await supabase
    .from('brainrots')
    .select('id, title, lore, category, image_url, upvotes, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Gagal memuat data dari tabel brainrots.');
  }

  return (data ?? []) as BrainrotEntry[];
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
