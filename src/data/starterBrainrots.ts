import { FAMOUS_1000_BRAINROTS } from './brainrotCatalog';
import type { BrainrotEntry } from '../types/brainrot';

export const PRESET_ARTWORKS = [
  {
    label: 'CRT Archive Stack',
    url: '/src/assets/images/brainrot_archive_hero_1795667460516.jpg',
  },
  {
    label: 'Voxel Core World',
    url: '/src/assets/images/brainrot_voxel_world_1795667460897.jpg',
  },
  {
    label: 'Kinetic Signal TV',
    url: '/src/assets/images/brainrot_crt_feed_1795667461662.jpg',
  },
] as const;

export const STARTER_BRAINROTS: BrainrotEntry[] = FAMOUS_1000_BRAINROTS;
