import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { BrainrotCategory } from '../types/brainrot';

interface BrainrotMediaProps {
  src: string;
  alt: string;
  category: BrainrotCategory;
  className?: string;
}

export function BrainrotMedia({
  src,
  alt,
  category,
  className = 'aspect-[4/3] w-full',
}: BrainrotMediaProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src.trim()) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 via-[#15151B] to-zinc-950 p-4 text-center`}
        role="img"
        aria-label={alt}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-400">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="max-w-[20ch] truncate text-xs font-medium text-zinc-400">
          {category} · Gambar tidak tersedia
        </p>
      </div>
    );
  }

  return (
    <div className={`${className} overflow-hidden bg-zinc-950`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}
