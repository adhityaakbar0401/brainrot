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

export const STARTER_BRAINROTS: BrainrotEntry[] = [
  {
    id: 'local-1',
    title: 'Skibidi Sigma Rizz',
    lore: 'Kombinasi tiga istilah puncak meme Gen Alpha yang dipakai untuk menggambarkan karisma absurd atau situasi yang terlalu random untuk dijelaskan dengan logika sehat.',
    category: 'TikTok',
    image_url: '/src/assets/images/brainrot_crt_feed_1795667461662.jpg',
    upvotes: 248,
    created_at: '2026-11-24T14:20:00.000Z',
  },
  {
    id: 'local-2',
    title: 'Dress To Impress Pose 28',
    lore: 'Pose legendaris di game Roblox Dress To Impress yang sering di-spam di ujung runway untuk mencuri perhatian juri sekaligus memancing tawa satu server.',
    category: 'Roblox',
    image_url: null,
    upvotes: 174,
    created_at: '2026-11-23T19:45:00.000Z',
  },
  {
    id: 'local-3',
    title: 'Herobrine Sighting 2012',
    lore: 'Mitos urban klasik Minecraft tentang entitas bermata putih tanpa pupil yang konon menebang daun pohon dan menggali terowongan 2x2 di dunia singleplayer.',
    category: 'Minecraft',
    image_url: '/src/assets/images/brainrot_voxel_world_1795667460897.jpg',
    upvotes: 312,
    created_at: '2026-11-22T09:10:00.000Z',
  },
  {
    id: 'local-4',
    title: 'Nah, I’d Win',
    lore: 'Kutipan ikonik Gojo Satoru yang berubah menjadi template meme universal setiap kali seseorang terlalu percaya diri menghadapi deadline atau tantangan mustahil.',
    category: 'Anime',
    image_url: null,
    upvotes: 289,
    created_at: '2026-11-21T16:05:00.000Z',
  },
  {
    id: 'local-5',
    title: 'Bombastic Side Eye',
    lore: 'Ekspresi lirikan tajam penuh penghakiman tanpa perlu mengucapkan sepatah kata pun ketika melihat kelakuan teman yang benar-benar di luar nalar.',
    category: 'Random',
    image_url: null,
    upvotes: 136,
    created_at: '2026-11-20T11:30:00.000Z',
  },
  {
    id: 'local-6',
    title: 'Chicken Jockey Theater',
    lore: 'Fenomena satu bioskop ikut berteriak histeris saat karakter zombie kecil menunggangi ayam muncul di layar, mengubah ruang nonton jadi konser dadakan.',
    category: 'Minecraft',
    image_url: null,
    upvotes: 195,
    created_at: '2026-11-19T08:15:00.000Z',
  },
];
