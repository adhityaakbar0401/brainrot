import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowBigUp, Check, Copy } from 'lucide-react';
import type { BrainrotEntry } from '../types/brainrot';
import { formatIndonesianDate, getCategoryStyles } from '../utils/formatters';
import { BrainrotMedia } from './BrainrotMedia';

interface BrainrotCardProps {
  entry: BrainrotEntry;
  isUpvoted: boolean;
  onUpvote: (entry: BrainrotEntry) => void;
}

export function BrainrotCard({
  entry,
  isUpvoted,
  onUpvote,
}: BrainrotCardProps) {
  const [copied, setCopied] = useState(false);
  const [bump, setBump] = useState(false);
  const categoryStyle = getCategoryStyles(entry.category);

  const handleCopy = async () => {
    const content = `${entry.title} [${entry.category}]\n${entry.lore}`;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleUpvoteClick = () => {
    setBump(true);
    onUpvote(entry);
    window.setTimeout(() => setBump(false), 200);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#121216] transition-colors duration-150 hover:border-zinc-600"
    >
      <BrainrotMedia
        src={entry.image_url}
        title={entry.title}
        category={entry.category}
        className="aspect-video w-full border-b border-zinc-800/80"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-md border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap shrink-0 ${categoryStyle.badgeClass}`}
          >
            {entry.category}
          </span>

          <time
            dateTime={entry.created_at}
            className="text-xs text-zinc-400 whitespace-nowrap"
          >
            {formatIndonesianDate(entry.created_at)}
          </time>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-zinc-50">
          {entry.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
          {entry.lore}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-800/90 pt-4">
          <button
            type="button"
            onClick={handleUpvoteClick}
            aria-pressed={isUpvoted}
            aria-label={`Upvote ${entry.title}, total ${entry.upvotes}`}
            className={`inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#FFE600] ${
              bump ? 'scale-105' : 'scale-100'
            } ${
              isUpvoted
                ? 'border-[#FFE600] bg-[#FFE600]/15 text-[#FFE600]'
                : 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-[#FFE600]/60 hover:text-[#FFE600]'
            }`}
          >
            <ArrowBigUp
              className={`h-4 w-4 shrink-0 ${
                isUpvoted ? 'fill-[#FFE600]' : ''
              }`}
              aria-hidden="true"
            />
            <span className="font-mono text-sm tabular-nums">
              {entry.upvotes}
            </span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Salin teks ${entry.title}`}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3.5 py-2 text-xs font-medium text-zinc-300 whitespace-nowrap transition-colors hover:border-zinc-700 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-[#FFE600]"
          >
            {copied ? (
              <>
                <Check
                  className="h-3.5 w-3.5 text-[#FFE600]"
                  aria-hidden="true"
                />
                <span className="text-[#FFE600]">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
