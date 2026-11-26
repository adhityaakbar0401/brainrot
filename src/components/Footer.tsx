interface FooterProps {
  onOpenSetup: () => void;
  onOpenSubmit: () => void;
}

export function Footer({ onOpenSetup, onOpenSubmit }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090B] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          Brainrot Archive &amp; Generator · Dikurasi untuk dokumentasi budaya
          internet.
        </p>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onOpenSubmit}
            className="cursor-pointer transition-colors hover:text-[#FFE600]"
          >
            Submit Entri
          </button>
          <button
            type="button"
            onClick={onOpenSetup}
            className="cursor-pointer transition-colors hover:text-zinc-100"
          >
            Skema Supabase
          </button>
        </div>
      </div>
    </footer>
  );
}
