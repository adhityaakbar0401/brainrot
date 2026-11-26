import { Search, X } from 'lucide-react';
import {
  FILTER_CATEGORIES,
  type FilterCategory,
} from '../types/brainrot';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  totalEntries: number;
  totalUpvotes: number;
  isLiveSupabase: boolean;
}

export function HeroSection({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  totalEntries,
  totalUpvotes,
  isLiveSupabase,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="border-b border-zinc-800/80 bg-[#09090B] py-10 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between gap-7 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
                <span className="text-[#FFE600] font-semibold">
                  Kamus Budaya Internet
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {isLiveSupabase
                    ? 'Terhubung ke Supabase'
                    : 'Pratinjau Arsip Lokal'}
                </span>
              </div>

              <h1
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.5rem]"
                style={{ textWrap: 'balance' }}
              >
                Arsip Lengkap{' '}
                <span className="text-[#FFE600]">Brainrot</span> &amp; Lore
                Meme Internet
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Katalog interaktif istilah slang paling absurd dari linimasa
                TikTok, lobi Roblox, mitos Minecraft, hingga kutipan anime yang
                menguasai algoritma internet.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="brainrot-search" className="sr-only">
                  Cari istilah brainrot atau lore
                </label>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <input
                  id="brainrot-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Cari istilah, slang, atau penjelasan lore..."
                  className="h-12 w-full rounded-xl border border-zinc-800 bg-[#121216] pl-12 pr-11 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-[#FFE600] focus:outline-none sm:text-base"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    aria-label="Hapus kata kunci pencarian"
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-[#FFE600]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>

              <div
                role="tablist"
                aria-label="Filter kategori brainrot"
                className="flex items-center gap-2 overflow-x-auto pb-1"
              >
                {FILTER_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onSelectCategory(category)}
                      className={`min-h-[40px] cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE600] sm:text-sm ${
                        isActive
                          ? 'border-[#FFE600] bg-[#FFE600] text-[#09090B]'
                          : 'border-zinc-800 bg-[#121216] text-zinc-300 hover:border-zinc-700 hover:text-zinc-50'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl border border-zinc-800 bg-[#121216]">
              <img
                src="/src/assets/images/brainrot_archive_hero_1795667460516.jpg"
                alt="Ilustrasi kolase monitor CRT dan budaya internet beraksen kuning dan merah"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/45 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-700/70 pt-4">
                  <div>
                    <p className="text-xs font-medium text-zinc-400">
                      Entri Terarsip
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#FFE600] tabular-nums">
                      {totalEntries.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-400">
                      Total Upvote
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#FF5C72] tabular-nums">
                      {totalUpvotes.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
