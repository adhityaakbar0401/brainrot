-- Skema Tabel Brainrots untuk Supabase
-- Jalankan script ini di Supabase Dashboard -> SQL Editor

create table if not exists public.brainrots (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(trim(title)) > 0),
  lore text not null check (char_length(trim(lore)) > 0),
  category text not null check (category in ('TikTok', 'Roblox', 'Minecraft', 'Anime', 'Random')),
  image_url text,
  upvotes integer not null default 0 check (upvotes >= 0),
  created_at timestamptz not null default now()
);

-- Aktifkan Row Level Security (RLS)
alter table public.brainrots enable row level security;

-- Kebijakan akses publik untuk membaca, menambah, dan upvote entri arsip
drop policy if exists "Public read brainrots" on public.brainrots;
create policy "Public read brainrots"
  on public.brainrots
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Public insert brainrots" on public.brainrots;
create policy "Public insert brainrots"
  on public.brainrots
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Public update upvotes" on public.brainrots;
create policy "Public update upvotes"
  on public.brainrots
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- Opsional: Fungsi RPC atomik agar upvote aman dari race condition
create or replace function public.increment_brainrot_upvote(row_id uuid)
returns public.brainrots
language sql
security definer
as $$
  update public.brainrots
  set upvotes = upvotes + 1
  where id = row_id
  returning *;
$$;

-- Data awal opsional agar arsip langsung terisi
insert into public.brainrots (title, lore, category, upvotes)
values
  (
    'Skibidi Sigma Rizz',
    'Kombinasi tiga istilah puncak meme Gen Alpha yang dipakai untuk menggambarkan karisma absurd atau situasi yang terlalu random untuk dijelaskan dengan logika biasa.',
    'TikTok',
    148
  ),
  (
    'Dress To Impress Pose 28',
    'Pose legendaris di game Roblox Dress To Impress yang sering di-spam di akhir runway untuk mencuri perhatian juri sekaligus memancing tawa satu server.',
    'Roblox',
    94
  ),
  (
    'Herobrine Sighting 2012',
    'Mitos urban klasik Minecraft tentang entitas bermata putih yang menebang daun pohon dan membangun terowongan 2x2 di dunia singleplayer.',
    'Minecraft',
    127
  ),
  (
    'Nah, I''d Win',
    'Kutipan ikonik Gojo Satoru yang berubah menjadi template meme universal saat seseorang terlalu percaya diri menghadapi tantangan mustahil.',
    'Anime',
    182
  ),
  (
    'Bomba Side Eye',
    'Ekspresi lirikan tajam penuh penghakiman tanpa perlu mengucapkan sepatah kata pun ketika melihat kelakuan teman yang di luar nalar.',
    'Random',
    76
  );
