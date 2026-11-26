import { Plus } from 'lucide-react';

interface HeaderProps {
  onOpenSubmit: () => void;
  onOpenSetup: () => void;
}

export function Header({ onOpenSubmit, onOpenSetup }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/90 bg-[#09090B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE600]"
        >
          Brainrot Archive
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
        >
          <a
            href="#roulette"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FFE600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE600]"
          >
            Roulette
          </a>
          <a
            href="#arsip"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FFE600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE600]"
          >
            Arsip Lore
          </a>
          <button
            type="button"
            onClick={onOpenSetup}
            className="whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE600]"
          >
            Setup Supabase
          </button>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenSubmit}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg bg-[#FFE600] px-4 py-2 text-sm font-bold text-[#09090B] whitespace-nowrap shrink-0 transition-transform duration-150 hover:bg-[#FFD000] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE600]"
          >
            <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Submit Brainrot</span>
          </button>
        </div>
      </div>
    </header>
  );
}
