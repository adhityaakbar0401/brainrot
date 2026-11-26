import { useEffect, useState } from 'react';
import type { BrainrotCategory } from '../types/brainrot';
import {
  getCategoryStyles,
  getPollinationsImageUrl,
} from '../utils/formatters';

interface BrainrotMediaProps {
  src?: string | null;
  title: string;
  category: BrainrotCategory;
  className?: string;
}

export function BrainrotMedia({
  src,
  title,
  category,
  className = 'aspect-video w-full',
}: BrainrotMediaProps) {
  const trimmedSrc = src?.trim() ?? '';
  const resolvedSrc = trimmedSrc || getPollinationsImageUrl(title);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [resolvedSrc]);

  const categoryStyle = getCategoryStyles(category);

  if (hasError) {
    return (
      <div
        className={`${className} relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${categoryStyle.gradientClass} px-6 py-5 text-center`}
        role="img"
        aria-label={title}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.28) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        />
        <span
          className={`relative z-10 rounded-md border px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${categoryStyle.badgeClass}`}
        >
          {category}
        </span>
        <p className="relative z-10 mt-2.5 line-clamp-2 max-w-[24ch] font-display text-xl font-extrabold leading-tight tracking-tight text-zinc-50 drop-shadow-sm sm:text-2xl">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden bg-zinc-950`}>
      <img
        src={resolvedSrc}
        alt={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}
