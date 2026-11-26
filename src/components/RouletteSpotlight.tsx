import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowBigUp, Check, Copy, Dices } from 'lucide-react';
import type { BrainrotEntry } from '../types/brainrot';
import { formatIndonesianDate, getCategoryStyles } from '../utils/formatters';
import { BrainrotMedia } from './BrainrotMedia';

interface RouletteSpotlightProps {
  entries: BrainrotEntry[];
  spotlight: BrainrotEntry | null;
  upvotedIds: Record<string, boolean>;
  onSpin: () => void;
  onUpvote: (entry: BrainrotEntry) => void;
}

export function RouletteSpotlight({
  entries,
  spotlight,
  upvotedIds,
  onSpin,
  onUpvote,
}: RouletteSpotlightProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSpinClick = () => {
    if (entries.length === 0 || isSpinning) return;
    setIsSpinning(true);
    window.setTimeout(() => {
      onSpin();
      setIsSpinning(false);
    }, 240);
  };

  const handleCopy = async () => {
    if (!spotlight) return;
    const text = `${spotlight.title} (${spotlight.category})\n${spotlight.lore}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const isUpvoted = spotlight ? Boolean(upvotedIds[spotlight.id]) : false;
  const catStyle = spotlight ? getCategoryStyles(spotlight.category) : null;

  return (
    <section id="roulette" className="border-b border-zinc-800/80 bg-[#0D0D11] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#FF5C72]">
              Daily Brainrot Roulette
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Generator Acak Harian
            </h2>
          </div>

          <button
            type="button"
            onClick={handleSpinClick}
            disabled={entries.length === 0 || isSpinning}
            className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FF2E4C] px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#E11D48] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2E4C]"
          >
            <Dices
              className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                isSpinning ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
            <span>{isSpinning ? 'Mengacak...' : 'Acak Brainrot'}</span>
          </button>
        </div>

        <div className="mt-6">
          {!spotlight ? (
            <div className="rounded-xl border border-zinc-800 bg-[#121216] p-8 text-center">
              <p className="text-sm text-zinc-400">
                Belum ada entri tersedia untuk diputar di roulette. Tambahkan
                entri baru untuk memulai.
              </p>
            </div>
          ) : (
            <motion.article
              key={spotlight.id}
              initial={{ opacity: 0.5, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 overflow-hidden rounded-xl border border-zinc-700/80 bg-[#141419] lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <BrainrotMedia
                  src={spotlight.image_url}
                  title={spotlight.title}
                  category={spotlight.category}
                  className="aspect-video h-full w-full border-b border-zinc-800/80 lg:border-b-0 lg:border-r"
                />
              </div>

              <div className="flex flex-col justify-between gap-5 p-6 sm:p-8 lg:col-span-7">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    {catStyle && (
                      <span
                        className={`rounded-md border px-2.5 py-1 font-semibold whitespace-nowrap ${catStyle.badgeClass}`}
                      >
                        {spotlight.category}
                      </span>
                    )}
                    <span className="text-zinc-400">
                      Pilihan Roulette ·{' '}
                      {formatIndonesianDate(spotlight.created_at)}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-zinc-50 sm:text-3xl">
                    {spotlight.title}
                  </h3>

                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {spotlight.lore}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800 pt-4">
                  <button
                    type="button"
                    onClick={() => onUpvote(spotlight)}
                    aria-pressed={isUpvoted}
                    className={`inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#FFE600] ${
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
                    <span className="font-mono tabular-nums">
                      {spotlight.upvotes}
                    </span>
                    <span>{isUpvoted ? 'Di-upvote' : 'Upvote'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 whitespace-nowrap transition-colors hover:border-zinc-600 hover:text-zinc-50 focus-visible:outline-2 focus-visible:outline-[#FFE600]"
                  >
                    {copied ? (
                      <>
                        <Check
                          className="h-4 w-4 text-[#FFE600]"
                          aria-hidden="true"
                        />
                        <span className="text-[#FFE600]">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Salin Teks</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
}
