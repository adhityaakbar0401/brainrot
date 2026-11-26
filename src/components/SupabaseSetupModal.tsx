import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';

interface SupabaseSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLiveSupabase: boolean;
}

const SQL_SNIPPET = `create table if not exists public.brainrots (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  lore text not null,
  category text not null check (category in ('TikTok', 'Roblox', 'Minecraft', 'Anime', 'Random')),
  image_url text,
  upvotes integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.brainrots enable row level security;

create policy "Public read brainrots" on public.brainrots
  for select to anon, authenticated using (true);

create policy "Public insert brainrots" on public.brainrots
  for insert to anon, authenticated with check (true);

create policy "Public update upvotes" on public.brainrots
  for update to anon, authenticated using (true) with check (true);

insert into storage.buckets (id, name, public)
values ('brainrot-images', 'brainrot-images', true)
on conflict (id) do nothing;

create policy "Public read brainrot-images" on storage.objects
  for select to anon, authenticated using (bucket_id = 'brainrot-images');

create policy "Public upload brainrot-images" on storage.objects
  for insert to anon, authenticated with check (bucket_id = 'brainrot-images');`;

export function SupabaseSetupModal({
  isOpen,
  onClose,
  isLiveSupabase,
}: SupabaseSetupModalProps) {
  const [copiedSql, setCopiedSql] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySql = async () => {
    try {
      await navigator.clipboard.writeText(SQL_SNIPPET);
      setCopiedSql(true);
      window.setTimeout(() => setCopiedSql(false), 1800);
    } catch {
      setCopiedSql(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#121216] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div>
            <h2
              id="setup-modal-title"
              className="font-display text-xl font-bold text-zinc-50"
            >
              Panduan Setup Supabase &amp; Vercel
            </h2>
            <p className="mt-0.5 text-xs text-zinc-400">
              Status saat ini:{' '}
              <span
                className={
                  isLiveSupabase
                    ? 'font-semibold text-[#FFE600]'
                    : 'font-semibold text-[#FF5C72]'
                }
              >
                {isLiveSupabase
                  ? 'Terhubung ke Supabase'
                  : 'Mode Pratinjau Lokal (Env belum diisi)'}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panduan setup"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-5 p-6 text-sm text-zinc-300">
          <div className="space-y-2">
            <h3 className="font-display text-base font-bold text-zinc-100">
              1. Buat Tabel <code className="font-mono text-[#FFE600]">brainrots</code> di Supabase
            </h3>
            <p className="text-xs leading-relaxed text-zinc-400">
              Buka SQL Editor di dashboard Supabase Anda, lalu jalankan skema
              berikut (versi lengkap tersedia di{' '}
              <code className="font-mono text-zinc-200">supabase/schema.sql</code>):
            </p>

            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#09090B]">
              <button
                type="button"
                onClick={handleCopySql}
                className="absolute right-3 top-3 inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:border-zinc-500"
              >
                {copiedSql ? (
                  <>
                    <Check
                      className="h-3.5 w-3.5 text-[#FFE600]"
                      aria-hidden="true"
                    />
                    <span className="text-[#FFE600]">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Salin SQL</span>
                  </>
                )}
              </button>
              <pre className="overflow-x-auto p-4 pr-28 font-mono text-xs leading-relaxed text-zinc-300">
                {SQL_SNIPPET}
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-base font-bold text-zinc-100">
              2. Tambahkan Environment Variables di Vercel atau <code className="font-mono text-[#FFE600]">.env</code>
            </h3>
            <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-4 font-mono text-xs leading-relaxed text-zinc-300">
              <div>VITE_SUPABASE_URL=https://project-id.supabase.co</div>
              <div>VITE_SUPABASE_ANON_KEY=eyJhbGciOi...</div>
            </div>
          </div>

          <div className="flex justify-end border-t border-zinc-800 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[40px] cursor-pointer rounded-lg bg-[#FFE600] px-5 py-2 text-sm font-bold text-[#09090B] transition-colors hover:bg-[#FFD000]"
            >
              Mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
