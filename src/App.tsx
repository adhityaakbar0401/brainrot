import { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import { BrainrotFeed } from './components/BrainrotFeed';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RouletteSpotlight } from './components/RouletteSpotlight';
import { SubmitBrainrotModal } from './components/SubmitBrainrotModal';
import { SupabaseSetupModal } from './components/SupabaseSetupModal';
import { STARTER_BRAINROTS } from './data/starterBrainrots';
import {
  createBrainrot,
  fetchBrainrots,
  isSupabaseConfigured,
  seedFamousBrainrotsToSupabase,
  upvoteBrainrot,
} from './lib/supabase';
import type {
  BrainrotEntry,
  FilterCategory,
  NewBrainrotInput,
  SortMode,
} from './types/brainrot';

const LOCAL_ENTRIES_KEY = 'brainrot_archive_local_entries_v2';
const UPVOTED_IDS_KEY = 'brainrot_archive_upvoted_ids_v1';

interface ToastMessage {
  type: 'success' | 'error';
  text: string;
}

function readLocalEntries(): BrainrotEntry[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_ENTRIES_KEY);
    if (!raw) return STARTER_BRAINROTS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0
      ? (parsed as BrainrotEntry[])
      : STARTER_BRAINROTS;
  } catch {
    return STARTER_BRAINROTS;
  }
}

function readUpvotedIds(): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(UPVOTED_IDS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null
      ? (parsed as Record<string, boolean>)
      : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [entries, setEntries] = useState<BrainrotEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('Semua');
  const [sortMode, setSortMode] = useState<SortMode>('latest');

  const [spotlightId, setSpotlightId] = useState<string | null>(null);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>(() =>
    readUpvotedIds()
  );

  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [dismissConfigBanner, setDismissConfigBanner] = useState(false);
  const [seedingProgress, setSeedingProgress] = useState<{
    inserted: number;
    total: number;
  } | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((type: 'success' | 'error', text: string) => {
    setToast({ type, text });
    window.setTimeout(() => {
      setToast((prev) => (prev?.text === text ? null : prev));
    }, 3200);
  }, []);

  const loadEntries = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      const localData = readLocalEntries();
      setEntries(localData);
      setSpotlightId((prev) =>
        prev && localData.some((item) => item.id === prev)
          ? prev
          : localData[0]?.id ?? null
      );
      setLoading(false);
      return;
    }

    try {
      const data = await fetchBrainrots();
      setEntries(data);
      setSpotlightId((prev) =>
        prev && data.some((item) => item.id === prev)
          ? prev
          : data[0]?.id ?? null
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan saat mengambil data dari Supabase.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadEntries();
  }, [loadEntries]);

  useEffect(() => {
    try {
      window.localStorage.setItem(UPVOTED_IDS_KEY, JSON.stringify(upvotedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [upvotedIds]);

  useEffect(() => {
    if (!isSupabaseConfigured && entries.length > 0) {
      try {
        window.localStorage.setItem(LOCAL_ENTRIES_KEY, JSON.stringify(entries));
      } catch {
        // Ignore storage quota errors
      }
    }
  }, [entries]);

  const filteredEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = entries.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.title.toLowerCase().includes(query) ||
        item.lore.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortMode === 'top') {
        if (b.upvotes !== a.upvotes) return b.upvotes - a.upvotes;
      }
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });
  }, [entries, searchQuery, selectedCategory, sortMode]);

  const totalUpvotes = useMemo(
    () => entries.reduce((sum, item) => sum + item.upvotes, 0),
    [entries]
  );

  const spotlightEntry = useMemo(() => {
    if (entries.length === 0) return null;
    return entries.find((item) => item.id === spotlightId) ?? entries[0];
  }, [entries, spotlightId]);

  const handleSpinRoulette = useCallback(() => {
    if (entries.length === 0) return;
    if (entries.length === 1) {
      setSpotlightId(entries[0].id);
      return;
    }
    const candidates = entries.filter((item) => item.id !== spotlightId);
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    if (chosen) {
      setSpotlightId(chosen.id);
    }
  }, [entries, spotlightId]);

  const handleUpvote = useCallback(
    async (entry: BrainrotEntry) => {
      // Optimistic instant feedback
      const previousEntries = entries;
      const wasUpvoted = Boolean(upvotedIds[entry.id]);

      setUpvotedIds((prev) => ({ ...prev, [entry.id]: true }));
      setEntries((prev) =>
        prev.map((item) =>
          item.id === entry.id
            ? { ...item, upvotes: item.upvotes + 1 }
            : item
        )
      );

      if (!isSupabaseConfigured) {
        showToast('success', `Upvote ditambahkan untuk "${entry.title}".`);
        return;
      }

      try {
        const updated = await upvoteBrainrot(entry.id, entry.upvotes);
        setEntries((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item))
        );
        showToast('success', `Upvote "${entry.title}" tersimpan ke Supabase.`);
      } catch (err) {
        // Rollback optimistic change on failure
        setEntries(previousEntries);
        setUpvotedIds((prev) => ({ ...prev, [entry.id]: wasUpvoted }));
        showToast(
          'error',
          err instanceof Error
            ? err.message
            : 'Gagal menyimpan upvote ke Supabase.'
        );
      }
    },
    [entries, upvotedIds, showToast]
  );

  const handleCreateBrainrot = useCallback(
    async (input: NewBrainrotInput) => {
      if (!isSupabaseConfigured) {
        const newLocal: BrainrotEntry = {
          id: `local-${Date.now()}`,
          title: input.title.trim(),
          lore: input.lore.trim(),
          category: input.category,
          image_url: input.image_url?.trim() || null,
          upvotes: 1,
          created_at: new Date().toISOString(),
        };
        setEntries((prev) => [newLocal, ...prev]);
        setSpotlightId(newLocal.id);
        showToast(
          'success',
          `"${newLocal.title}" ditambahkan ke pratinjau arsip lokal.`
        );
        return;
      }

      const created = await createBrainrot(input);
      await loadEntries();
      setSpotlightId(created.id);
      showToast('success', `"${created.title}" berhasil disimpan ke Supabase.`);
    },
    [loadEntries, showToast]
  );

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('Semua');
  }, []);

  const handleSeedThousand = useCallback(async () => {
    if (!isSupabaseConfigured || seedingProgress) return;
    setSeedingProgress({ inserted: 0, total: STARTER_BRAINROTS.length });
    try {
      const inserted = await seedFamousBrainrotsToSupabase(
        STARTER_BRAINROTS,
        (done, total) => {
          setSeedingProgress({ inserted: done, total });
        }
      );
      await loadEntries();
      showToast(
        'success',
        `${inserted.toLocaleString('id-ID')} brainrot terkenal berhasil diisi ke Supabase.`
      );
    } catch (err) {
      showToast(
        'error',
        err instanceof Error
          ? err.message
          : 'Gagal mengisi 1.000 brainrot ke Supabase.'
      );
    } finally {
      setSeedingProgress(null);
    }
  }, [seedingProgress, loadEntries, showToast]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedCategory !== 'Semua';

  return (
    <div className="flex min-h-screen flex-col bg-[#09090B] text-zinc-50">
      <Header
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenSetup={() => setIsSetupOpen(true)}
      />

      {!isSupabaseConfigured && !dismissConfigBanner && (
        <div className="border-b border-[#FFE600]/30 bg-[#FFE600]/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-zinc-200">
              <Info
                className="h-4 w-4 shrink-0 text-[#FFE600]"
                aria-hidden="true"
              />
              <span>
                Mode Pratinjau Lokal aktif karena{' '}
                <code className="font-mono text-[#FFE600]">
                  VITE_SUPABASE_URL
                </code>{' '}
                dan{' '}
                <code className="font-mono text-[#FFE600]">
                  VITE_SUPABASE_ANON_KEY
                </code>{' '}
                belum diatur.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsSetupOpen(true)}
                className="cursor-pointer font-semibold text-[#FFE600] underline-offset-4 hover:underline"
              >
                Panduan Setup Supabase
              </button>
              <button
                type="button"
                onClick={() => setDismissConfigBanner(true)}
                aria-label="Tutup pemberitahuan konfigurasi"
                className="cursor-pointer rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          totalEntries={entries.length}
          totalUpvotes={totalUpvotes}
          isLiveSupabase={isSupabaseConfigured}
        />

        <RouletteSpotlight
          entries={entries}
          spotlight={spotlightEntry}
          upvotedIds={upvotedIds}
          onSpin={handleSpinRoulette}
          onUpvote={handleUpvote}
        />

        <BrainrotFeed
          entries={filteredEntries}
          totalCount={entries.length}
          loading={loading}
          error={error}
          sortMode={sortMode}
          onSortChange={setSortMode}
          hasActiveFilters={hasActiveFilters}
          upvotedIds={upvotedIds}
          isLiveSupabase={isSupabaseConfigured}
          seedingProgress={seedingProgress}
          onSeedThousand={handleSeedThousand}
          onUpvote={handleUpvote}
          onRetry={loadEntries}
          onResetFilters={handleResetFilters}
          onOpenSubmit={() => setIsSubmitOpen(true)}
          onOpenSetup={() => setIsSetupOpen(true)}
        />
      </main>

      <Footer
        onOpenSetup={() => setIsSetupOpen(true)}
        onOpenSubmit={() => setIsSubmitOpen(true)}
      />

      <SubmitBrainrotModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        onSubmit={handleCreateBrainrot}
      />

      <SupabaseSetupModal
        isOpen={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
        isLiveSupabase={isSupabaseConfigured}
      />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 right-5 z-50 flex max-w-sm items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-semibold shadow-xl ${
            toast.type === 'success'
              ? 'border-[#FFE600]/60 bg-[#141419] text-[#FFE600]'
              : 'border-[#FF2E4C]/60 bg-[#141419] text-[#FF8A9A]'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <span>{toast.text}</span>
        </div>
      )}
    </div>
  );
}
