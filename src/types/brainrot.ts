export type BrainrotCategory =
  | 'TikTok'
  | 'Roblox'
  | 'Minecraft'
  | 'Anime'
  | 'Random';

export type FilterCategory = 'Semua' | BrainrotCategory;

export type SortMode = 'latest' | 'top';

export interface BrainrotEntry {
  id: string;
  title: string;
  lore: string;
  category: BrainrotCategory;
  image_url: string | null;
  upvotes: number;
  created_at: string;
}

export interface NewBrainrotInput {
  title: string;
  lore: string;
  category: BrainrotCategory;
  image_url?: string;
}

export const CATEGORIES: BrainrotCategory[] = [
  'TikTok',
  'Roblox',
  'Minecraft',
  'Anime',
  'Random',
];

export const FILTER_CATEGORIES: FilterCategory[] = [
  'Semua',
  ...CATEGORIES,
];
