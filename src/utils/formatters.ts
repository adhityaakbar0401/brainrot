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
  gradientClass: string;
  accentHex: string;
} {
  switch (category) {
    case 'TikTok':
      return {
        badgeClass: 'border-[#FFE600]/40 bg-[#FFE600]/10 text-[#FFE600]',
        gradientClass:
          'from-[#3B2F00] via-[#1C1408] to-[#3B0A16] border-[#FFE600]/25',
        accentHex: '#FFE600',
      };
    case 'Roblox':
      return {
        badgeClass: 'border-[#FF2E4C]/45 bg-[#FF2E4C]/12 text-[#FF5C72]',
        gradientClass:
          'from-[#4A0B18] via-[#1D0B14] to-[#2B0E24] border-[#FF2E4C]/30',
        accentHex: '#FF2E4C',
      };
    case 'Minecraft':
      return {
        badgeClass: 'border-lime-400/40 bg-lime-400/10 text-lime-300',
        gradientClass:
          'from-[#1B3308] via-[#101C0B] to-[#0D2118] border-lime-400/25',
        accentHex: '#A3E635',
      };
    case 'Anime':
      return {
        badgeClass: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
        gradientClass:
          'from-[#422006] via-[#211208] to-[#360E12] border-amber-400/25',
        accentHex: '#FBBF24',
      };
    case 'Random':
    default:
      return {
        badgeClass: 'border-zinc-600 bg-zinc-800/80 text-zinc-200',
        gradientClass:
          'from-[#27272A] via-[#18181B] to-[#2E260A] border-zinc-700',
        accentHex: '#E4E4E7',
      };
  }
}

export function getPollinationsImageUrl(title: string): string {
  const prompt = `funny absurd internet meme art of ${title.trim() || 'internet meme'}, vibrant pop art style`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=640&height=360&nologo=true`;
}

export function isValidHttpOrLocalUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('/src/assets/') || trimmed.startsWith('data:image/')) {
    return true;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
