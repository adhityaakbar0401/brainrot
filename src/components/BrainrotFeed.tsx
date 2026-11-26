import {
  AlertTriangle,
  ArchiveX,
  Plus,
  RefreshCw,
  RotateCcw,
} from 'lucide-react';
import type { BrainrotEntry, SortMode } from '../types/brainrot';
import { BrainrotCard } from './BrainrotCard';

interface BrainrotFeedProps {
  entries: BrainrotEntry[];
  totalCount: number;
  loading: boolean;
  error: string | null;
  sortMode: SortMode;
  onSortChange: (mode: SortMode) => void;
  hasActiveFilters: boolean;
  upvotedIds: Record<string, boolean>;
  onUpvote: (entry: BrainrotEntry) => void;
  onRetry: () => void;
  onResetFilters: () => void;
  onOpenSubmit: () => void;
  onOpenSetup: () => void;
}

export function BrainrotFeed({
  entries,
  totalCount,
  loading,
  error,
  sortMode,
  onSortChange,
  hasActiveFilters,
  upvotedIds,
  onUpvote,
  onRetry,
  onResetFilters,
  onOpenSubmit,
  onOpenSetup,
}: BrainrotFeedProps) {
  return (
    <section id="arsip" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-zinc-800/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-50">
              Feed Arsip Lore
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Menampilkan{' '}
              <span className="font-mono font-semibold text-zinc-200 tabular-nums">
                {entries.length}
              </span>{' '}
              dari{' '}
              <span className="font-mono font-semibold text-zinc-200 tabular-nums">
                {totalCount}
              </span>{' '}
              entri
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div
              role="group"
              aria-label="Urutkan entri"
              className="inline-flex rounded-lg border border-zinc-800 bg-[#121216] p-1"
            >
              <button
                type="button"
                onClick={() => onSortChange('latest')}
                className={`min-h-[36px] cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-[#FFE600] ${
                  sortMode === 'latest'
                    ? 'bg-[#FFE600] text-[#09090B]'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Terbaru
              </button>
              <button
                type="button"
                onClick={() => onSortChange('top')}
                className={`min-h-[36px] cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-[#FFE600] ${
                  sortMode === 'top'
                    ? 'bg-[#FFE600] text-[#09090B]'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Terpopuler
              </button>
            </div>

            <button
              type="button"
              onClick={onRetry}
              disabled={loading}
              aria-label="Segarkan daftar arsip"
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-[#121216] px-3.5 py-2 text-xs font-semibold text-zinc-300 whitespace-nowrap transition-colors hover:border-zinc-700 hover:text-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#FFE600]"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                aria-hidden="true"
              />
              <span>Segarkan</span>
            </button>
          </div>
        </div>

        {loading && (
          <div
            aria-label="Memuat daftar brainrot"
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex h-72 flex-col justify-between rounded-xl border border-zinc-800 bg-[#121216] p-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-20 animate-pulse rounded bg-zinc-800" />
                    <div className="h-4 w-24 animate-pulse rounded bg-zinc-800" />
                  </div>
                  <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-800" />
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800/80" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-800/80" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-800/80" />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div className="h-9 w-20 animate-pulse rounded-lg bg-zinc-800" />
                  <div className="h-9 w-20 animate-pulse rounded-lg bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="mt-8 rounded-xl border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#FF2E4C]/40 bg-[#FF2E4C]/15 text-[#FF5C72]">
                  <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-zinc-50">
                    Gagal Memuat Data dari Supabase
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {error}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Pastikan tabel <code className="font-mono text-[#FFE600]">brainrots</code> dan kebijakan RLS sudah dibuat di proyek Supabase Anda.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={onOpenSetup}
                  className="min-h-[40px] cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-100 whitespace-nowrap transition-colors hover:border-zinc-500"
                >
                  Lihat Skema SQL
                </button>
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg bg-[#FF2E4C] px-4 py-2 text-xs font-bold text-white whitespace-nowrap transition-colors hover:bg-[#E11D48]"
                >
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Coba Lagi</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && entries.length === 0 && (
          <div className="mt-8 rounded-xl border border-zinc-800 bg-[#121216] p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400">
              <ArchiveX className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-zinc-50">
              {hasActiveFilters
                ? 'Tidak ada entri yang cocok'
                : 'Arsip masih kosong'}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
              {hasActiveFilters
                ? 'Coba ubah kata kunci pencarian atau pilih kategori lain untuk melihat lore brainrot lainnya.'
                : 'Belum ada lore brainrot yang tersimpan. Jadilah kontributor pertama yang mengarsipkan istilah meme di sini.'}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  <span>Reset Filter</span>
                </button>
              )}
              <button
                type="button"
                onClick={onOpenSubmit}
                className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg bg-[#FFE600] px-4 py-2 text-sm font-bold text-[#09090B] transition-colors hover:bg-[#FFD000]"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                <span>Submit Brainrot</span>
              </button>
            </div>
          </div>
        )}

        {!loading && !error && entries.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
              <BrainrotCard
                key={entry.id}
                entry={entry}
                isUpvoted={Boolean(upvotedIds[entry.id])}
                onUpvote={onUpvote}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
