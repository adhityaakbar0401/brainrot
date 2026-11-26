import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { ImagePlus, Loader2, Trash2, X } from 'lucide-react';
import { PRESET_ARTWORKS } from '../data/starterBrainrots';
import {
  isSupabaseConfigured,
  uploadBrainrotImage,
} from '../lib/supabase';
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

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Gagal membaca file gambar.'));
      }
    };
    reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
    reader.readAsDataURL(file);
  });
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [statusLabel, setStatusLabel] = useState('Menyimpan...');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    return () => {
      if (filePreviewUrl) {
        URL.revokeObjectURL(filePreviewUrl);
      }
    };
  }, [filePreviewUrl]);

  if (!isOpen) return null;

  const clearSelectedFile = () => {
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
    }
    setSelectedFile(null);
    setFilePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormError('File harus berupa gambar (PNG, JPG, WEBP, atau GIF).');
      e.target.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFormError('Ukuran gambar maksimal 5 MB.');
      e.target.value = '';
      return;
    }

    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
    }
    setSelectedFile(file);
    setFilePreviewUrl(URL.createObjectURL(file));
    setImageUrl('');
  };

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

    if (!selectedFile && trimmedImage && !isValidHttpOrLocalUrl(trimmedImage)) {
      setFormError(
        'URL gambar harus diawali dengan https:// atau http:// yang valid.'
      );
      return;
    }

    setSubmitting(true);
    try {
      let finalImageUrl: string | undefined = trimmedImage || undefined;

      if (selectedFile) {
        if (isSupabaseConfigured) {
          setStatusLabel('Mengunggah gambar...');
          finalImageUrl = await uploadBrainrotImage(selectedFile);
        } else {
          setStatusLabel('Memproses gambar...');
          finalImageUrl = await readFileAsDataUrl(selectedFile);
        }
      }

      setStatusLabel('Menyimpan entri...');
      await onSubmit({
        title: trimmedTitle,
        lore: trimmedLore,
        category,
        image_url: finalImageUrl,
      });

      setTitle('');
      setLore('');
      setCategory('TikTok');
      setImageUrl('');
      clearSelectedFile();
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
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-800 bg-[#121216] shadow-2xl"
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

          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="brainrot-file-upload"
                className="block text-xs font-semibold text-zinc-200"
              >
                Upload Gambar (Opsional)
              </label>
              <span className="text-[11px] text-zinc-400">
                Maks. 5 MB · Kosongkan untuk auto-generate
              </span>
            </div>

            {filePreviewUrl && selectedFile ? (
              <div className="overflow-hidden rounded-xl border border-zinc-700 bg-[#09090B]">
                <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                  <img
                    src={filePreviewUrl}
                    alt="Pratinjau gambar yang akan diunggah"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-zinc-800 px-3.5 py-2.5 text-xs">
                  <span className="truncate font-medium text-zinc-200">
                    {selectedFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={clearSelectedFile}
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-[#FF5C72] hover:border-[#FF2E4C]"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ) : (
              <label
                htmlFor="brainrot-file-upload"
                className="flex cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-dashed border-zinc-700 bg-[#09090B] px-4 py-3.5 text-xs font-medium text-zinc-300 transition-colors hover:border-[#FFE600] hover:text-[#FFE600]"
              >
                <ImagePlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  Pilih file gambar untuk diunggah ke bucket{' '}
                  <code className="font-mono text-[#FFE600]">
                    brainrot-images
                  </code>
                </span>
                <input
                  ref={fileInputRef}
                  id="brainrot-file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            )}
          </div>

          <div>
            <label
              htmlFor="brainrot-image-url"
              className="block text-xs font-semibold text-zinc-200"
            >
              Atau Link URL Gambar Manual (Opsional)
            </label>
            <input
              id="brainrot-image-url"
              type="text"
              disabled={Boolean(selectedFile)}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder={
                selectedFile
                  ? 'Menggunakan file gambar yang dipilih di atas'
                  : 'https://contoh.com/meme.jpg (kosongkan untuk auto-generate)'
              }
              className="mt-1.5 h-11 w-full rounded-lg border border-zinc-800 bg-[#09090B] px-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[#FFE600] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            {!selectedFile && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-zinc-400">
                  Preset arsip:
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
            )}
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
                  <span>{statusLabel}</span>
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
