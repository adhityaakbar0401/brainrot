import type { BrainrotCategory } from '../types/brainrot';

export function formatIndonesianDate(isoDate: string): string {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) {
    return 'Baru saja';
  }
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(parsed);
}

export function getCategoryStyles(category: BrainrotCategory): {
  badgeClass: string;
  accentHex: string;
} {
  switch (category) {
    case 'TikTok':
      return {
        badgeClass: 'border-[#FFE600]/40 bg-[#FFE600]/10 text-[#FFE600]',
        accentHex: '#FFE600',
      };
    case 'Roblox':
      return {
        badgeClass: 'border-[#FF2E4C]/45 bg-[#FF2E4C]/12 text-[#FF5C72]',
        accentHex: '#FF2E4C',
      };
    case 'Minecraft':
      return {
        badgeClass: 'border-lime-400/40 bg-lime-400/10 text-lime-300',
        accentHex: '#A3E635',
      };
    case 'Anime':
      return {
        badgeClass: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
        accentHex: '#FBBF24',
      };
    case 'Random':
    default:
      return {
        badgeClass: 'border-zinc-600 bg-zinc-800/80 text-zinc-200',
        accentHex: '#E4E4E7',
      };
  }
}

export function isValidHttpOrLocalUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('/src/assets/')) return true;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
