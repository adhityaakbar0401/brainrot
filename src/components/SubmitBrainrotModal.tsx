import { useEffect, useState, type FormEvent } from 'react';
import { Loader2, X } from 'lucide-react';
import { PRESET_ARTWORKS } from '../data/starterBrainrots';
import {
  CATEGORIES,
  type BrainrotCategory,
  type NewBrainrotInput,
} from '../types/brainrot';
import { isValidHttpOrLocalUrl } from '../utils/formatters';

interface SubmitBrainrotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: NewBrainrotInput) => Promise<void>;
}

export function SubmitBrainrotModal({
  isOpen,
  onClose,
  onSubmit,
}: SubmitBrainrotModalProps) {
  const [title, setTitle] = useState('');
  const [lore, setLore] = useState('');
  const [category, setCategory] = useState<BrainrotCategory>('TikTok');
  const [imageUrl, setImageUrl] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !submitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, submitting, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const trimmedTitle = title.trim();
    const trimmedLore = lore.trim();
    const trimmedImage = imageUrl.trim();

    if (trimmedTitle.length < 2) {
      setFormError('Judul istilah minimal 2 karakter.');
      return;
    }

    if (trimmedLore.length < 10) {
      setFormError('Penjelasan lore minimal 10 karakter agar konteksnya jelas.');
      return;
    }

    if (trimmedImage && !isValidHttpOrLocalUrl(trimmedImage)) {
      setFormError(
        'URL gambar harus diawali dengan https:// atau http:// yang valid.'
      );
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit({
        title: trimmedTitle,
        lore: trimmedLore,
        category,
        image_url: trimmedImage || undefined,
      });
      setTitle('');
      setLore('');
      setCategory('TikTok');
      setImageUrl('');
      onClose();
    } catch (err) {
      setFormError(
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan saat menyimpan entri.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-modal-title"
      onClick={() => {
        if (!submitting) onClose();
      }}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div>
            <h2
              id="submit-modal-title"
              className="font-display text-xl font-bold text-zinc-50"
            >
              Submit Brainrot Baru
            </h2>
            <p className="mt-0.5 text-xs text-zinc-400">
              Tambahkan slang atau lore internet ke arsip bersama.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Tutup form submit"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 disabled:opacity-50"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {formError && (
            <div
              role="alert"
              className="rounded-lg border border-[#FF2E4C]/50 bg-[#FF2E4C]/12 px-4 py-3 text-xs font-medium text-[#FF8A9A]"
            >
              {formError}
            </div>
          )}

          <div>
            <label
              htmlFor="brainrot-title"
              className="block text-xs font-semibold text-zinc-200"
            >
              Judul Istilah / Meme <span className="text-[#FF5C72]">*</span>
            </label>
            <input
              id="brainrot-title"
              type="text"
              required
              maxLength={80}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Tung Tung Tung Sahur"
              className="mt-1.5 h-11 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#FFE600] focus:outline-none"
            />
          </div>

          <div>
            <span className="block text-xs font-semibold text-zinc-200">
              Kategori <span className="text-[#FF5C72]">*</span>
            </span>
            <div className="mt-1.5 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {CATEGORIES.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`min-h-[38px] cursor-pointer rounded-lg border px-2 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                      active
                        ? 'border-[#FFE600] bg-[#FFE600] text-[#09090B]'
                        : 'border-zinc-800 bg-[#09090B] text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="brainrot-lore"
              className="block text-xs font-semibold text-zinc-200"
            >
              Penjelasan Lore / Arti Slang{' '}
              <span className="text-[#FF5C72]">*</span>
            </label>
            <textarea
              id="brainrot-lore"
              required
              rows={4}
              maxLength={500}
              value={lore}
              onChange={(e) => setLore(e.target.value)}
              placeholder="Jelaskan asal-usul meme, cara pemakaiannya, atau konteksnya di komunitas..."
              className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-3.5 py-2.5 text-sm leading-relaxed text-zinc-100 placeholder:text-zinc-500 focus:border-[#FFE600] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="brainrot-image-url"
              className="block text-xs font-semibold text-zinc-200"
            >
              URL Gambar (Opsional)
            </label>
            <input
              id="brainrot-image-url"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://contoh.com/meme.jpg"
              className="mt-1.5 h-11 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#FFE600] focus:outline-none"
            />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-zinc-400">
                Atau pilih ilustrasi arsip:
              </span>
              {PRESET_ARTWORKS.map((art) => (
                <button
                  key={art.url}
                  type="button"
                  onClick={() => setImageUrl(art.url)}
                  className="cursor-pointer rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] text-zinc-300 transition-colors hover:border-[#FFE600]/60 hover:text-[#FFE600]"
                >
                  {art.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-zinc-800 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="min-h-[42px] cursor-pointer rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white disabled:opacity-50"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#FFE600] px-5 py-2 text-sm font-bold text-[#09090B] transition-colors hover:bg-[#FFD000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <span>Simpan ke Arsip</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
