import type { BrainrotCategory, BrainrotEntry } from '../types/brainrot';

interface SeedConcept {
  title: string;
  lore: string;
  category: BrainrotCategory;
  baseUpvotes: number;
  image_url?: string | null;
}

const CORE_CONCEPTS: SeedConcept[] = [
  // === TIKTOK & ITALIAN BRAINROT (40) ===
  {
    title: 'Tung Tung Tung Sahur',
    lore: 'Fenomena anomali horor-komedi kentungan sahur asal Indonesia yang meledak di TikTok global sebagai karakter ikonik gelombang Italian Brainrot.',
    category: 'TikTok',
    baseUpvotes: 984,
    image_url: '/src/assets/images/brainrot_crt_feed_1795667461662.jpg',
  },
  {
    title: 'Tralalero Tralala',
    lore: 'Hiu berkaki tiga memakai sepatu Nike biru yang menjadi maskot utama seri meme absurd Italian Brainrot di FYP.',
    category: 'TikTok',
    baseUpvotes: 942,
  },
  {
    title: 'Bombardiro Crocodilo',
    lore: 'Persilangan buaya dan pesawat pengebom dengan narasi AI suara Italia dramatis yang mendominasi editan absurd TikTok.',
    category: 'TikTok',
    baseUpvotes: 915,
  },
  {
    title: 'Ballerina Cappuccina',
    lore: 'Karakter balerina berkepala cangkir cappuccino yang sering dipasangkan dalam kisah drama fiktif semesta Italian Brainrot.',
    category: 'TikTok',
    baseUpvotes: 860,
  },
  {
    title: 'Brr Brr Patapim',
    lore: 'Makhluk hutan berkaki raksasa dan berhidung panjang dari lore Italian Brainrot dengan irama narasi cepat yang mudah menempel di kepala.',
    category: 'TikTok',
    baseUpvotes: 812,
  },
  {
    title: 'Lirilì Larilà',
    lore: 'Kaktus berkepala gajah memakai sandal di tengah gurun pasir, salah satu karakter pembuka paling ikonik di semesta brainrot Italia.',
    category: 'TikTok',
    baseUpvotes: 785,
  },
  {
    title: 'Boneca Ambalabu',
    lore: 'Karakter katak ban mobil berkaki manusia hasil editan surreal TikTok Indonesia yang ikut bergabung ke jajaran anomali viral.',
    category: 'TikTok',
    baseUpvotes: 845,
  },
  {
    title: 'Cappuccino Assassino',
    lore: 'Ninja kopi berpedang katana ganda dalam semesta Italian Brainrot yang dikisahkan sebagai rival berat para karakter absurd lainnya.',
    category: 'TikTok',
    baseUpvotes: 790,
  },
  {
    title: 'Chimpanzini Bananini',
    lore: 'Simpanse mungil yang tumbuh di dalam kulit pisang kuning dengan suara narasi bernada ceria dan ritmis.',
    category: 'TikTok',
    baseUpvotes: 772,
  },
  {
    title: 'Trippi Troppi',
    lore: 'Kombinasi udang atau beruang ikan absurd dengan rima Italia yang sering dijadikan suara latar video edit cepat.',
    category: 'TikTok',
    baseUpvotes: 734,
  },
  {
    title: 'La Vaca Saturno Saturnita',
    lore: 'Sapi berkepala planet Saturnus yang menari di jalanan kota dalam narasi lore luar angkasa absurd.',
    category: 'TikTok',
    baseUpvotes: 718,
  },
  {
    title: 'Skibidi Toilet',
    lore: 'Serial animasi SFM ikonik tentang kepala bernyanyi di dalam toilet melawan kameramen yang melahirkan istilah brainrot generasi baru.',
    category: 'TikTok',
    baseUpvotes: 965,
  },
  {
    title: 'Sigma Grindset',
    lore: 'Pola pikir serba fokus, dingin, dan misterius ala editan slow-motion phonk yang kini lebih sering dipakai secara satir.',
    category: 'TikTok',
    baseUpvotes: 890,
  },
  {
    title: 'Fanum Tax',
    lore: 'Istilah mengambil sebagian makanan teman tanpa izin, dipopulerkan oleh streamer Kai Cenat dan rekannya Fanum.',
    category: 'TikTok',
    baseUpvotes: 830,
  },
  {
    title: 'Mewing Streak',
    lore: 'Gerakan menempelkan lidah ke langit-langit mulut sambil menunjuk garis rahang dengan jari sebagai kode tidak bisa bicara.',
    category: 'TikTok',
    baseUpvotes: 805,
  },
  {
    title: 'Looksmaxxing',
    lore: 'Obsesi komedi atau serius di internet untuk memaksimalkan penampilan wajah dan rahang lewat berbagai trik viral.',
    category: 'TikTok',
    baseUpvotes: 760,
  },
  {
    title: 'Ohio Final Boss',
    lore: 'Julukan untuk kejadian atau orang paling aneh di internet, lahir dari meme bahwa segala hal mustahil terjadi di Ohio.',
    category: 'TikTok',
    baseUpvotes: 874,
  },
  {
    title: 'Rizzler',
    lore: 'Seseorang dengan tingkat karisma luar biasa untuk memikat orang lain hanya lewat tatapan atau gombalan singkat.',
    category: 'TikTok',
    baseUpvotes: 851,
  },
  {
    title: 'Aura Farming',
    lore: 'Melakukan aksi keren atau berdiri dengan pose dramatis demi mengumpulkan poin karisma tak terlihat di depan kamera.',
    category: 'TikTok',
    baseUpvotes: 910,
  },
  {
    title: 'Minus Infinity Aura',
    lore: 'Hukuman sosial instan saat seseorang tersandung di depan umum atau gagal melakukan aksi keren yang sudah direncanakan.',
    category: 'TikTok',
    baseUpvotes: 822,
  },
  {
    title: 'What The Sigma',
    lore: 'Reaksi kaget campur bingung bernada karakter Squidward ketika menyaksikan situasi yang tidak masuk akal.',
    category: 'TikTok',
    baseUpvotes: 749,
  },
  {
    title: 'Let Him Cook',
    lore: 'Seruan memberi ruang kepada seseorang yang sedang mengeksekusi ide gila atau performa luar biasa.',
    category: 'TikTok',
    baseUpvotes: 868,
  },
  {
    title: 'Who Let Bro Cook',
    lore: 'Kebalikan dari Let Him Cook, dipakai ketika ide atau karya seseorang justru berakhir berantakan total.',
    category: 'TikTok',
    baseUpvotes: 755,
  },
  {
    title: 'Delulu Is The Solulu',
    lore: 'Mantra bercanda bahwa berkhayal setinggi mungkin adalah solusi terbaik menghadapi kenyataan hidup yang berat.',
    category: 'TikTok',
    baseUpvotes: 798,
  },
  {
    title: 'Chill Guy',
    lore: 'Anjing kartun bersweater abu-abu dengan tangan di saku yang tetap santai meski dunia di sekitarnya sedang kacau.',
    category: 'TikTok',
    baseUpvotes: 903,
  },
  {
    title: 'Very Demure Very Mindful',
    lore: 'Ungkapan satir berulang untuk memuji sikap kalem, sopan, dan elegan dalam aktivitas sehari-hari yang sebenarnya biasa saja.',
    category: 'TikTok',
    baseUpvotes: 712,
  },
  {
    title: 'Grimace Shake',
    lore: 'Tren horor komedi TikTok di mana orang langsung pingsan secara dramatis setelah mencicipi milkshake ungu McDonald’s.',
    category: 'TikTok',
    baseUpvotes: 839,
  },
  {
    title: 'NPC Live Stream',
    lore: 'Format siaran langsung di mana kreator bertingkah seperti karakter gim yang mengulang kalimat yang sama setiap mendapat gift.',
    category: 'TikTok',
    baseUpvotes: 764,
  },
  {
    title: 'Ice Cream So Good',
    lore: 'Kalimat ikonik PinkyDoll saat meniru karakter NPC di siaran langsung TikTok yang sempat ditiru jutaan kreator.',
    category: 'TikTok',
    baseUpvotes: 695,
  },
  {
    title: 'English Or Spanish',
    lore: 'Prank menanyakan bahasa pilihan lalu mengucapkan kalimat "siapa yang bergerak duluan..." hingga semua orang membeku di tempat.',
    category: 'TikTok',
    baseUpvotes: 814,
  },
  {
    title: 'Locked In Alien',
    lore: 'Foto editan wajah alien berkonsentrasi penuh yang dipakai saat begadang mengejar tugas atau bermain ranked match.',
    category: 'TikTok',
    baseUpvotes: 778,
  },
  {
    title: 'Roman Empire',
    lore: 'Topik random yang diam-diam dipikirkan seseorang hampir setiap hari tanpa alasan logis.',
    category: 'TikTok',
    baseUpvotes: 702,
  },
  {
    title: 'Girl Math',
    lore: 'Logika keuangan bercanda di TikTok yang membuat barang diskon atau pembayaran tunai terasa seolah-olah gratis.',
    category: 'TikTok',
    baseUpvotes: 721,
  },
  {
    title: 'Bed Rotting',
    lore: 'Berbaring seharian di kasur sambil scrolling tanpa produktivitas demi memulihkan energi mental.',
    category: 'TikTok',
    baseUpvotes: 740,
  },
  {
    title: 'Glazing Extreme',
    lore: 'Memuji idola, teman, atau karakter fiksi secara berlebihan hingga terasa tidak objektif lagi.',
    category: 'TikTok',
    baseUpvotes: 788,
  },
  {
    title: 'Pookie Bear',
    lore: 'Panggilan sayang bernada kocak yang dipakai ke sahabat dekat, pasangan, atau bahkan musuh di kolom komentar.',
    category: 'TikTok',
    baseUpvotes: 731,
  },
  {
    title: 'Brat Summer',
    lore: 'Estetika hijau neon mencolok dan tulisan blur ala album Charli XCX yang mendominasi editan media sosial.',
    category: 'TikTok',
    baseUpvotes: 684,
  },
  {
    title: 'Garam Mararam',
    lore: 'Varian anomali lokal bernada ritmis tentang suara ketukan dapur dan bumbu yang ikut meramaikan linimasa TikTok.',
    category: 'TikTok',
    baseUpvotes: 743,
  },
  {
    title: 'Frigo Camelo',
    lore: 'Unta berbadan kulkas dua pintu yang berjalan di gurun bersalju dalam daftar karakter Italian Brainrot klasik.',
    category: 'TikTok',
    baseUpvotes: 709,
  },
  {
    title: 'Bananita Dolfinita',
    lore: 'Lumba-lumba berbentuk pisang yang melompat di lautan dengan narasi cepat khas video brainrot TikTok.',
    category: 'TikTok',
    baseUpvotes: 691,
  },

  // === ROBLOX (40) ===
  {
    title: 'Dress To Impress Pose 28',
    lore: 'Pose ikonik di ujung runway Dress To Impress yang di-spam pemain untuk mencuri perhatian juri sekaligus memancing tawa satu server.',
    category: 'Roblox',
    baseUpvotes: 889,
  },
  {
    title: 'Oof Death Sound',
    lore: 'Efek suara legendaris karakter Roblox saat tumbang yang menjadi salah satu bunyi paling dikenali dalam sejarah internet.',
    category: 'Roblox',
    baseUpvotes: 924,
  },
  {
    title: 'Bacon Hair Supremacy',
    lore: 'Kepercayaan bahwa pemain dengan rambut default menyerupai daging asap justru sering menjadi pro player paling menakutkan di server.',
    category: 'Roblox',
    baseUpvotes: 856,
  },
  {
    title: 'Blox Fruits Dough V2',
    lore: 'Buah iblis paling diburu pemain Blox Fruits untuk PvP hingga sering memicu drama bounty hunter di Second dan Third Sea.',
    category: 'Roblox',
    baseUpvotes: 811,
  },
  {
    title: 'Blox Fruits Kitsune Roll',
    lore: 'Momen langka mendapatkan buah Kitsune dari Zioles gacha yang langsung dirayakan satu server dengan penuh iri.',
    category: 'Roblox',
    baseUpvotes: 842,
  },
  {
    title: 'Sols RNG Roll Aura',
    lore: 'Gim gacha murni tanpa gameplay rumit di mana pemain hanya berdiri AFK demi mengejar aura langka satu banding jutaan.',
    category: 'Roblox',
    baseUpvotes: 793,
  },
  {
    title: 'Brookhaven RP Chaos',
    lore: 'Server roleplay santai yang selalu berubah menjadi kekacauan total penuh rumah meledak dan kejar-kejaran mobil polisi.',
    category: 'Roblox',
    baseUpvotes: 804,
  },
  {
    title: 'Adopt Me Trust Trade',
    lore: 'Modus legendaris di game tukar-menukar hewan peliharaan yang melahirkan trauma masa kecil sekaligus meme peringatan komunitas.',
    category: 'Roblox',
    baseUpvotes: 745,
  },
  {
    title: 'Doors Rush & Ambush',
    lore: 'Lampu berkedip di hotel gelap Roblox Doors yang membuat seluruh squad panik berebut masuk lemari sebelum tertabrak Rush.',
    category: 'Roblox',
    baseUpvotes: 827,
  },
  {
    title: 'Fisch Mythic Catch',
    lore: 'Sensasi mengetuk bar pancing penuh ketegangan demi menarik ikan mutasi langka bernilai ribuan koin di malam berkabut.',
    category: 'Roblox',
    baseUpvotes: 768,
  },
  {
    title: 'Blade Ball Parry Clash',
    lore: 'Duel klik cepat saat bola merah melesat berkecepatan cahaya di antara dua pemain terakhir sampai salah satunya meledak.',
    category: 'Roblox',
    baseUpvotes: 781,
  },
  {
    title: 'Tower of Hell Rage',
    lore: 'Jatuh dari lantai teratas tepat sebelum menyentuh garis finis gara-gara satu laser berputar tanpa checkpoint.',
    category: 'Roblox',
    baseUpvotes: 819,
  },
  {
    title: 'Murder Mystery 2 Camper',
    lore: 'Pemain pembunuh yang terus berjaga di dekat senjata sheriff yang jatuh hingga memicu perdebatan panas di chat box.',
    category: 'Roblox',
    baseUpvotes: 733,
  },
  {
    title: 'Dead Rails Speedrun',
    lore: 'Perjalanan kereta api menembus gurun penuh zombi dan bandit sambil kehabisan batu bara di tengah rel.',
    category: 'Roblox',
    baseUpvotes: 862,
  },
  {
    title: 'Grow A Garden Mutation',
    lore: 'Menunggu cuaca badai atau bulan darah di kebun virtual demi memanen buah raksasa bermutasi emas.',
    category: 'Roblox',
    baseUpvotes: 876,
  },
  {
    title: '99 Nights In The Forest',
    lore: 'Bertahan hidup mengumpulkan kayu dan menyelamatkan anak hilang sambil menghindari rusa raksasa bermata tajam di malam hari.',
    category: 'Roblox',
    baseUpvotes: 895,
  },
  {
    title: 'Pet Simulator 99 Huge',
    lore: 'Berjam-jam membuka telur otomatis demi melihat notifikasi kuning besar tanda mendapatkan Huge Pet pertama.',
    category: 'Roblox',
    baseUpvotes: 714,
  },
  {
    title: 'Pls Donate Booth',
    lore: 'Berdiri di depan stan donasi dengan tulisan paling menyentuh atau paling kocak demi berharap sultan Robux lewat.',
    category: 'Roblox',
    baseUpvotes: 799,
  },
  {
    title: 'Arsenal Concussion Rifle',
    lore: 'Tembakan terakhir di mode Gun Game menggunakan pisau emas yang selalu bikin pemain terjebak satu ronde penuh.',
    category: 'Roblox',
    baseUpvotes: 688,
  },
  {
    title: 'Deepwoken Perma Wipe',
    lore: 'Kehilangan karakter berlevel tinggi beserta seluruh perlengkapan hanya karena terpeleset di The Depths.',
    category: 'Roblox',
    baseUpvotes: 752,
  },
  {
    title: 'Natural Disaster Survival',
    lore: 'Gim klasik abadi di mana gedung selalu runtuh oleh tornado sementara pemain melompat-lompat memakai apel hijau.',
    category: 'Roblox',
    baseUpvotes: 847,
  },
  {
    title: 'Work At A Pizza Place',
    lore: 'Kekacauan di dapur saat rekan satu tim sengaja memasukkan kotak pizza kosong ke dalam oven hingga dapur terbakar.',
    category: 'Roblox',
    baseUpvotes: 774,
  },
  {
    title: 'Jailbreak Museum Heist',
    lore: 'Menunggu teman menekan tuas secara bersamaan agar pintu kaca museum terbuka sebelum polisi menunggu di luar.',
    category: 'Roblox',
    baseUpvotes: 726,
  },
  {
    title: 'BedWars Rageblade',
    lore: 'Membeli pedang terkuat di late game lalu menyapu seluruh tim lawan setelah ranjang mereka hancur.',
    category: 'Roblox',
    baseUpvotes: 719,
  },
  {
    title: 'Strongest Battlegrounds',
    lore: 'Pertarungan jalanan penuh efek kombo anime di mana tombol dash dan ragdoll menentukan siapa yang keluar hidup-hidup.',
    category: 'Roblox',
    baseUpvotes: 834,
  },
  {
    title: 'Anime Vanguards Mythic',
    lore: 'Mengulang stage puluhan kali demi mengumpulkan gem untuk gacha unit anime berperingkat mythic dengan trait terbaik.',
    category: 'Roblox',
    baseUpvotes: 741,
  },
  {
    title: 'Jujutsu Shenanigans',
    lore: 'Arena bebas penuh kekacauan Domain Expansion yang bisa meledakkan setengah bangunan peta dalam satu detik.',
    category: 'Roblox',
    baseUpvotes: 808,
  },
  {
    title: 'Dandys World Twisted',
    lore: 'Mengisi mesin ekstraktor sambil berlari menghindari monster Twisted bersama tim yang sering lupa jalur lift.',
    category: 'Roblox',
    baseUpvotes: 786,
  },
  {
    title: 'Rivals Sniper Flick',
    lore: 'Duel 1v1 cepat yang berakhir dalam dua detik gara-gara tembakan sniper headshot dari balik dinding.',
    category: 'Roblox',
    baseUpvotes: 729,
  },
  {
    title: 'Pressure Sebastian Shop',
    lore: 'Menjelajah fasilitas bawah laut penuh anomali sambil mampir membeli baterai senter di toko ikan mutan Sebastian.',
    category: 'Roblox',
    baseUpvotes: 762,
  },
  {
    title: 'Guts & Blackpowder',
    lore: 'Tentara era Napoleon bersenjata senapan isi ulang lambat yang berjuang mati-matian melawan gerombolan mayat hidup.',
    category: 'Roblox',
    baseUpvotes: 710,
  },
  {
    title: 'Evade Nextbot Chase',
    lore: 'Berlari sekencang mungkin sambil bhop menghindari gambar PNG meme yang mengejar dengan suara distorsi keras.',
    category: 'Roblox',
    baseUpvotes: 823,
  },
  {
    title: 'Theme Park Tycoon Spaghetti',
    lore: 'Membangun lintasan roller coaster super miring yang langsung menabrak lantai tanpa aturan fisika.',
    category: 'Roblox',
    baseUpvotes: 675,
  },
  {
    title: 'Bee Swarm Simulator',
    lore: 'Menggunakan macro semalaman penuh demi memanen serbuk sari di ladang lada dengan puluhan lebah legendaris.',
    category: 'Roblox',
    baseUpvotes: 704,
  },
  {
    title: 'Royale High Fountain',
    lore: 'Menjawab teka-teki air mancur setiap dua jam dengan harapan tipis mendapatkan halo gratis, tapi ujungnya kehilangan diamond.',
    category: 'Roblox',
    baseUpvotes: 697,
  },
  {
    title: 'Piggy Chapter 12',
    lore: 'Game kejar-kejaran bertema kartun yang diam-diam punya alur cerita sedih dan plot twist emosional di akhir.',
    category: 'Roblox',
    baseUpvotes: 681,
  },
  {
    title: 'Phantom Forces Trickshot',
    lore: 'Lompatan 360 derajat dari atas crane sambil menembakkan sniper BFG-50 dari ujung peta.',
    category: 'Roblox',
    baseUpvotes: 690,
  },
  {
    title: 'Loomian Legacy Shiny',
    lore: 'Mencari varian warna langka Gleaming di semak rumput berjam-jam tanpa henti.',
    category: 'Roblox',
    baseUpvotes: 642,
  },
  {
    title: 'Slap Battles Bob',
    lore: 'Tamparan jarak jauh yang melempar pemain keluar pulau melayang hingga harus mencari badge rahasia berjam-jam.',
    category: 'Roblox',
    baseUpvotes: 738,
  },
  {
    title: 'Steal A Brainrot',
    lore: 'Gim Roblox yang mengadu kecepatan pemain mencuri karakter Italian Brainrot milik tetangga sebelum base-nya terkunci.',
    category: 'Roblox',
    baseUpvotes: 907,
  },

  // === MINECRAFT (40) ===
  {
    title: 'Herobrine Sighting',
    lore: 'Mitos urban paling terkenal di Minecraft tentang sosok Steve bermata putih yang menebang daun pohon dan membuat terowongan 2x2.',
    category: 'Minecraft',
    baseUpvotes: 938,
    image_url: '/src/assets/images/brainrot_voxel_world_1795667460897.jpg',
  },
  {
    title: 'Chicken Jockey',
    lore: 'Teriakan ikonik dari film Minecraft saat bayi zombi menunggangi ayam muncul di arena tinju hingga membuat penonton bioskop heboh.',
    category: 'Minecraft',
    baseUpvotes: 952,
  },
  {
    title: 'I Am Steve',
    lore: 'Kalimat pembuka penuh wibawa Jack Black sebagai Steve yang langsung menjadi template meme pengenalan diri di internet.',
    category: 'Minecraft',
    baseUpvotes: 929,
  },
  {
    title: 'Flint And Steel',
    lore: 'Dialog sederhana menyalakan api di film Minecraft yang diulang-ulang dengan intonasi dramatis di TikTok.',
    category: 'Minecraft',
    baseUpvotes: 901,
  },
  {
    title: 'The Nether',
    lore: 'Pengucapan berat dan serius saat memasuki portal obsidian menyala ungu menuju dimensi lava penuh Ghast.',
    category: 'Minecraft',
    baseUpvotes: 844,
  },
  {
    title: 'Lava Chicken Song',
    lore: 'Lagu singkat tentang ayam panggang lava panas dari toko Steve yang mendadak terngiang di kepala jutaan penonton.',
    category: 'Minecraft',
    baseUpvotes: 879,
  },
  {
    title: 'Creeper Aw Man',
    lore: 'Pembuka parodi lagu Revenge yang wajib disambut satu kolom komentar ketika seseorang menyebut kata Creeper.',
    category: 'Minecraft',
    baseUpvotes: 912,
  },
  {
    title: 'Water Bucket Clutch',
    lore: 'Aksi menaruh air satu blok di bawah kaki tepat sepersekian detik sebelum menghantam dasar jurang dari ketinggian ratusan blok.',
    category: 'Minecraft',
    baseUpvotes: 866,
  },
  {
    title: 'Technoblade Never Dies',
    lore: 'Slogan abadi legenda PvP Minecraft bertopi mahkota babi yang selalu dikenang komunitas sebagai simbol ketangguhan.',
    category: 'Minecraft',
    baseUpvotes: 970,
  },
  {
    title: 'Villager Hmmm',
    lore: 'Suara gumaman datar penduduk desa berhidung panjang yang tetap tenang meski menawarkan satu zamrud untuk tiga roti.',
    category: 'Minecraft',
    baseUpvotes: 835,
  },
  {
    title: 'Never Dig Straight Down',
    lore: 'Aturan emas bertahan hidup nomor satu di Minecraft yang tetap saja dilanggar hingga berakhir jatuh ke danau lava.',
    category: 'Minecraft',
    baseUpvotes: 859,
  },
  {
    title: 'Warden Deep Dark',
    lore: 'Ketegangan berjalan mengendap-endap di kota kuno bawah tanah agar sensor sculk tidak memanggil monster buta terkuat.',
    category: 'Minecraft',
    baseUpvotes: 792,
  },
  {
    title: 'Baby Zombie Sprinting',
    lore: 'Musuh terkecil tapi paling ditakuti di mode Hardcore karena kecepatannya dan hitbox mungil yang susah dipukul.',
    category: 'Minecraft',
    baseUpvotes: 817,
  },
  {
    title: 'Enderman Eye Contact',
    lore: 'Kesalahan fatal menatap mata Enderman tanpa sengaja di tengah malam hingga muncul teriakan distorsi menyeramkan.',
    category: 'Minecraft',
    baseUpvotes: 779,
  },
  {
    title: 'Netherite Mining Bed',
    lore: 'Teknik meledakkan kasur di Nether Y-15 demi berburu Ancient Debris sambil berharap tidak terkena ledakan sendiri.',
    category: 'Minecraft',
    baseUpvotes: 765,
  },
  {
    title: 'Mending Villager Reset',
    lore: 'Menghancurkan dan menaruh Lectern berulang kali selama satu jam hanya demi mendapatkan buku sihir Mending murah.',
    category: 'Minecraft',
    baseUpvotes: 803,
  },
  {
    title: 'Two-Week Minecraft Phase',
    lore: 'Fenomena berkumpulnya teman satu tongkrongan membangun server seru selama dua minggu penuh sebelum mendadak sepi lagi.',
    category: 'Minecraft',
    baseUpvotes: 904,
  },
  {
    title: 'Ender Pearl Stasis',
    lore: 'Menahan mutiara Ender mengambang di air bubble column agar bisa diteleportasi pulang secara instan dari jarak jauh.',
    category: 'Minecraft',
    baseUpvotes: 748,
  },
  {
    title: 'Redstone Comparator Logic',
    lore: 'Mencoba membuat pintu rahasia otomatis tapi berakhir menonton tutorial dua jam dan tetap salah sambung kabel.',
    category: 'Minecraft',
    baseUpvotes: 732,
  },
  {
    title: 'Boat Clutch',
    lore: 'Menyelamatkan diri dari jatuh tinggi dengan merakit perahu kayu dan menaikinya tepat sebelum menyentuh tanah.',
    category: 'Minecraft',
    baseUpvotes: 784,
  },
  {
    title: 'Diamond At Y Minus 59',
    lore: 'Ekspedisi tambang berjam-jam di kedalaman deepslate gelap demi suara dentingan manis saat menambang bijih biru.',
    category: 'Minecraft',
    baseUpvotes: 757,
  },
  {
    title: 'Iron Golem Aggro',
    lore: 'Salah menekan tombol klik kiri di desa hingga penjaga besi raksasa melempar pemain terbang setinggi menara.',
    category: 'Minecraft',
    baseUpvotes: 721,
  },
  {
    title: 'Elytra Wall Crash',
    lore: 'Terbang melesat dengan kembang api lalu lupa mengerem hingga menabrak gunung batu di dunia Hardcore.',
    category: 'Minecraft',
    baseUpvotes: 769,
  },
  {
    title: 'Bedwars Fireball Jump',
    lore: 'Melempar bola api ke bawah kaki sendiri untuk meluncur melewati jembatan dan menghancurkan pertahanan lawan.',
    category: 'Minecraft',
    baseUpvotes: 744,
  },
  {
    title: 'Enchanting Table Language',
    lore: 'Membaca huruf alien Standard Galactic Alphabet yang tertulis di atas buku sihir tanpa pernah tahu arti sebenarnya.',
    category: 'Minecraft',
    baseUpvotes: 716,
  },
  {
    title: 'TNT Cannon Griefing',
    lore: 'Merakit meriam peledak jarak jauh di server faksi hanya untuk menjebol benteng obsidian milik tetangga.',
    category: 'Minecraft',
    baseUpvotes: 698,
  },
  {
    title: 'Dirt Hut Day One',
    lore: 'Rumah kotak sederhana dari blok tanah di malam pertama yang dijanjikan sementara tapi bertahan sampai punya armor Netherite.',
    category: 'Minecraft',
    baseUpvotes: 841,
  },
  {
    title: 'Piglin Gold Barter',
    lore: 'Melempar batangan emas ke Piglin di Nether sambil berdoa keluar Ender Pearl bukannya sepuluh pasang sepatu bot besi.',
    category: 'Minecraft',
    baseUpvotes: 736,
  },
  {
    title: 'Totem Of Undying Pop',
    lore: 'Efek animasi partikel kuning-hijau yang menyelamatkan nyawa di detik terakhir saat bertarung melawan naga atau kristal.',
    category: 'Minecraft',
    baseUpvotes: 787,
  },
  {
    title: 'Jenny Mod Forbidden Lore',
    lore: 'Meme bisik-bisik komunitas Minecraft soal mod terlarang yang selalu jadi bahan candaan di kolom komentar kreator.',
    category: 'Minecraft',
    baseUpvotes: 751,
  },
  {
    title: 'Aether Portal Disappointment',
    lore: 'Kekecewaan kolektif jutaan pemain masa kecil setelah menumpuk Glowstone dan menuang air tapi portal surga tidak pernah menyala.',
    category: 'Minecraft',
    baseUpvotes: 919,
  },
  {
    title: 'Entity 303 Creepypasta',
    lore: 'Legenda peretas misterius berjubah putih di era awal Minecraft selain Herobrine yang sering dijadikan bahan video horor.',
    category: 'Minecraft',
    baseUpvotes: 707,
  },
  {
    title: 'C418 Sweden Nostalgia',
    lore: 'Melodi piano tenang yang seketika memicu rasa rindu masa kecil bermain sepulang sekolah.',
    category: 'Minecraft',
    baseUpvotes: 883,
  },
  {
    title: 'Trial Chambers Mace',
    lore: 'Senjata palu baru yang menghasilkan damage ledakan luar biasa semakin tinggi pemain jatuh dari udara.',
    category: 'Minecraft',
    baseUpvotes: 773,
  },
  {
    title: 'Phantom Insomnia',
    lore: 'Monster terbang menyebalkan yang muncul menghantui langit malam hanya karena pemain lupa tidur tiga hari berturut-turut.',
    category: 'Minecraft',
    baseUpvotes: 715,
  },
  {
    title: 'Axolotl Bucket Collect',
    lore: 'Mengumpulkan seluruh variasi warna Axolotl ke dalam ember demi mencari varian biru langka.',
    category: 'Minecraft',
    baseUpvotes: 693,
  },
  {
    title: 'Wither Storm Trauma',
    lore: 'Bos raksasa bertentakel dari Minecraft Story Mode yang menyedot seluruh blok dunia menjadi bola kehancuran.',
    category: 'Minecraft',
    baseUpvotes: 760,
  },
  {
    title: 'Speedbridge Shift Unshift',
    lore: 'Menekan dan melepas tombol jongkok secara berirama cepat untuk membangun jembatan melayang tanpa terjatuh.',
    category: 'Minecraft',
    baseUpvotes: 728,
  },
  {
    title: 'Far Lands Glitch',
    lore: 'Batas dunia kuno jutaan blok jauhnya tempat generasi medan terpecah menjadi dinding raksasa penuh lubang.',
    category: 'Minecraft',
    baseUpvotes: 795,
  },
  {
    title: 'Shulker Box Inception',
    lore: 'Membuka puluhan kotak berwarna di dalam Ender Chest untuk mencari satu item yang ternyata tertinggal di markas.',
    category: 'Minecraft',
    baseUpvotes: 702,
  },

  // === ANIME (40) ===
  {
    title: 'Nah, I’d Win',
    lore: 'Kutipan Gojo Satoru yang berubah menjadi meme paling ikonik saat seseorang terlalu percaya diri menghadapi tantangan mustahil.',
    category: 'Anime',
    baseUpvotes: 961,
  },
  {
    title: 'Domain Expansion',
    lore: 'Gerakan tangan khas Jujutsu Kaisen yang ditiru di situasi sehari-hari seperti memasuki ruang ujian atau kamar berantakan.',
    category: 'Anime',
    baseUpvotes: 928,
  },
  {
    title: 'Stand Proud You Are Strong',
    lore: 'Pujian penuh hormat Sukuna yang langsung dijadikan template meme kemenangan telak atas lawan.',
    category: 'Anime',
    baseUpvotes: 873,
  },
  {
    title: 'With This Treasure I Summon',
    lore: 'Kalimat pemanggilan Mahoraga ala Megumi yang sering diparodikan setiap kali menghadapi masalah sepele.',
    category: 'Anime',
    baseUpvotes: 887,
  },
  {
    title: 'Loboto-my Kaisen',
    lore: 'Era puncak brainrot fandom Jujutsu Kaisen penuh editan panel manga absurd selama masa jeda rilis bab mingguan.',
    category: 'Anime',
    baseUpvotes: 854,
  },
  {
    title: 'Hollow Purple',
    lore: 'Teknik gabungan merah dan biru milik Gojo yang sering diedit ke adegan melempar benda apa pun ke arah kamera.',
    category: 'Anime',
    baseUpvotes: 846,
  },
  {
    title: 'Gear 5 Drums Of Liberation',
    lore: 'Transformasi Luffy bertenaga imajinasi kartun yang diiringi suara tawa bebas dan tabuhan drum pembebasan.',
    category: 'Anime',
    baseUpvotes: 891,
  },
  {
    title: 'Za Warudo Time Stop',
    lore: 'Teriakan Dio Brando menghentikan waktu diikuti efek suara bass berat khas JoJo’s Bizarre Adventure.',
    category: 'Anime',
    baseUpvotes: 863,
  },
  {
    title: 'Muda Muda Muda',
    lore: 'Serentetan pukulan super cepat Dio dan Giorno yang meneriakkan kata sia-sia berulang-ulang.',
    category: 'Anime',
    baseUpvotes: 798,
  },
  {
    title: 'Ora Ora Ora',
    lore: 'Balasan pukulan kilat Star Platinum milik Jotaro Kujo sebagai tandingan abadi Muda Muda.',
    category: 'Anime',
    baseUpvotes: 815,
  },
  {
    title: 'Omae Wa Mou Shindeiru',
    lore: 'Kalimat klasik Kenshiro "kau sudah mati" yang langsung disusul sahutan kaget Nani?! dengan efek mata menyala.',
    category: 'Anime',
    baseUpvotes: 882,
  },
  {
    title: 'Kagurabachi Peak Fiction',
    lore: 'Fenomena meme internet yang menobatkan manga Kagurabachi sebagai mahakarya terbesar bahkan sebelum bab keduanya terbit.',
    category: 'Anime',
    baseUpvotes: 809,
  },
  {
    title: 'Solo Leveling Arise',
    lore: 'Bisikan dingin Sung Jinwoo membangkitkan pasukan bayangan yang selalu memicu editan suara berat di media sosial.',
    category: 'Anime',
    baseUpvotes: 917,
  },
  {
    title: 'Talk No Jutsu',
    lore: 'Jurus rahasia terkuat Naruto untuk mengalahkan musuh terberat hanya lewat ceramah empati tentang masa lalu yang sama.',
    category: 'Anime',
    baseUpvotes: 832,
  },
  {
    title: 'Bankai Release',
    lore: 'Pengucapan kata sakti Bleach dengan nada rendah dan tenang sebelum pedang berubah bentuk secara drastis.',
    category: 'Anime',
    baseUpvotes: 849,
  },
  {
    title: 'Anya Smug Face',
    lore: 'Senyum miring penuh percaya diri Anya Forger yang menjadi stiker wajib di setiap obrolan grup.',
    category: 'Anime',
    baseUpvotes: 825,
  },
  {
    title: 'Bocchi Glitch Meltdown',
    lore: 'Adegan Hitori Gotou meleleh menjadi animasi 3D pecah atau poligon abstrak ketika cemas menghadapi interaksi sosial.',
    category: 'Anime',
    baseUpvotes: 801,
  },
  {
    title: 'Turbo Granny Cat',
    lore: 'Roh nenek super cepat yang terjebak di tubuh boneka kucing keberuntungan dalam seri Dandadan.',
    category: 'Anime',
    baseUpvotes: 838,
  },
  {
    title: 'Truck-Kun Isekai',
    lore: 'Truk putih tak terhentikan yang secara bercanda dianggap sebagai agen transportasi resmi menuju dunia fantasi.',
    category: 'Anime',
    baseUpvotes: 871,
  },
  {
    title: 'Ultra Instinct Theme',
    lore: 'Dua nada terompet pembuka tema Goku Ultra Instinct yang otomatis muncul tiap seseorang berhasil menghindar secara refleks.',
    category: 'Anime',
    baseUpvotes: 865,
  },
  {
    title: 'Erwin Charge Speech',
    lore: 'Pidato pengorbanan Komandan Erwin di Attack on Titan yang sering dipakai sebagai motivasi belajar atau gym di menit terakhir.',
    category: 'Anime',
    baseUpvotes: 840,
  },
  {
    title: 'Levi Beyblade Spin',
    lore: 'Aksi Kapten Levi berputar cepat di udara menebas Titan hingga dijuluki gasing manusia paling mematikan.',
    category: 'Anime',
    baseUpvotes: 789,
  },
  {
    title: 'Sukuna Binding Vow',
    lore: 'Meme bahwa Sukuna selalu lolos dari situasi terdesak dengan membuat perjanjian pengorbanan aneh di menit terakhir.',
    category: 'Anime',
    baseUpvotes: 816,
  },
  {
    title: 'Giorno Piano Theme',
    lore: 'Bagian piano il vento d’oro yang menandakan kekalahan telak bagi siapa pun yang berani melawan karakter utama.',
    category: 'Anime',
    baseUpvotes: 853,
  },
  {
    title: 'Shikanoko Nokonoko',
    lore: 'Lagu pembuka gadis rusa yang berputar tanpa henti dan menginfeksi linimasa dengan tarian berulang yang menghipnotis.',
    category: 'Anime',
    baseUpvotes: 894,
  },
  {
    title: 'To Be Continued Arrow',
    lore: 'Lagu Roundabout milik Yes dengan panah cokelat di pojok kiri bawah tepat sebelum nasib sial menimpa.',
    category: 'Anime',
    baseUpvotes: 829,
  },
  {
    title: 'Saitama OK Face',
    lore: 'Ekspresi wajah botak polos Saitama menanggapi ancaman penghancuran planet hanya dengan satu kata datar.',
    category: 'Anime',
    baseUpvotes: 812,
  },
  {
    title: 'Megumin Explosion',
    lore: 'Mengeluarkan seluruh mana hanya untuk satu ledakan raksasa lalu langsung pingsan tak berdaya di tanah.',
    category: 'Anime',
    baseUpvotes: 758,
  },
  {
    title: 'Frieren Aura Kill Yourself',
    lore: 'Adegan dingin penyihir Frieren mengalahkan iblis Aura tanpa berkeringat karena menyembunyikan mana selama ribuan tahun.',
    category: 'Anime',
    baseUpvotes: 877,
  },
  {
    title: 'Pochita Chainsaw Bark',
    lore: 'Iblis gergaji mungil berbentuk anjing oranye yang imut sekaligus sumber kekuatan Chainsaw Man.',
    category: 'Anime',
    baseUpvotes: 766,
  },
  {
    title: 'Itachi Tsukuyomi Chair',
    lore: 'Adegan Itachi duduk tenang di singgasana sambil menunjuk ke samping ternyata ilusi genjutsu.',
    category: 'Anime',
    baseUpvotes: 794,
  },
  {
    title: 'Aizen Everything Planned',
    lore: 'Meme bahwa kegagalan atau kejadian random di kehidupan nyata sebenarnya sudah direncanakan oleh Sosuke Aizen.',
    category: 'Anime',
    baseUpvotes: 807,
  },
  {
    title: 'Yamcha Death Pose',
    lore: 'Pose terbaring meringkuk di dalam kawah tanah yang terus ditiru berbagai anime modern sebagai penghormatan komedi.',
    category: 'Anime',
    baseUpvotes: 775,
  },
  {
    title: 'Shinji In The Chair',
    lore: 'Pose duduk membungkuk putus asa di kursi lipat putih yang dipakai menggambarkan kelelahan mental total.',
    category: 'Anime',
    baseUpvotes: 821,
  },
  {
    title: 'Madara Wake Up To Reality',
    lore: 'Monolog ikonik Madara Uchiha tentang kerasnya kenyataan yang sering dijadikan audio edit motivasi gelap.',
    category: 'Anime',
    baseUpvotes: 848,
  },
  {
    title: 'Blue Lock Egoist',
    lore: 'Dialog sepak bola penuh metafora aura monster dan egois demi mencetak satu gol penentu di tengah lapangan.',
    category: 'Anime',
    baseUpvotes: 782,
  },
  {
    title: 'Roronoa Zoro Lost Again',
    lore: 'Lelucon abadi bahwa Zoro bisa tersesat masuk ke anime lain hanya karena berjalan lurus di koridor.',
    category: 'Anime',
    baseUpvotes: 899,
  },
  {
    title: 'All Might I Am Here',
    lore: 'Teriakan heroik kemunculan sang pahlawan nomor satu yang selalu disambut rasa lega luar biasa.',
    category: 'Anime',
    baseUpvotes: 747,
  },
  {
    title: 'Kira Yoshikage Monologue',
    lore: 'Perkenalan diri super panjang dan detail tentang rutinitas tidur jam sebelas malam hanya untuk hidup tenang.',
    category: 'Anime',
    baseUpvotes: 763,
  },
  {
    title: 'L Death Note Sitting',
    lore: 'Gaya duduk jongkok di kursi sambil memegang ponsel dengan dua jari agar kemampuan berpikir meningkat 40 persen.',
    category: 'Anime',
    baseUpvotes: 831,
  },

  // === RANDOM / CLASSIC & ABSURD INTERNET LORE (40) ===
  {
    title: 'Bombastic Side Eye',
    lore: 'Ekspresi lirikan tajam penuh penghakiman tanpa sepatah kata pun ketika melihat kelakuan teman di luar nalar.',
    category: 'Random',
    baseUpvotes: 852,
  },
  {
    title: 'OIIA OIIA Spinning Cat',
    lore: 'Kucing abu-abu bernama Ethel yang berputar cepat seperti gasing diiringi suara elektronik O-I-I-A-I-O yang adiktif.',
    category: 'Random',
    baseUpvotes: 934,
  },
  {
    title: 'John Pork Is Calling',
    lore: 'Panggilan masuk misterius dari pria berkepala babi realistis yang bikin bingung antara menerima atau menolak telepon.',
    category: 'Random',
    baseUpvotes: 886,
  },
  {
    title: 'Smurf Cat Indo Luna',
    lore: 'Makhluk biru bertopi jamur diiringi lagu Alan Walker "We Live, We Love, We Lie" yang mendominasi editan akhir tahun.',
    category: 'Random',
    baseUpvotes: 874,
  },
  {
    title: 'Quandale Dingle Lore',
    lore: 'Narasi suara cepat penuh nama teman fiktif dan kejadian kriminal konyol yang menjadi fondasi meme audio modern.',
    category: 'Random',
    baseUpvotes: 843,
  },
  {
    title: 'Chipi Chipi Chapa Chapa',
    lore: 'Kucing menganggukkan kepala mengikuti lagu anak ceria yang tanpa sadar diputar ulang ratusan kali.',
    category: 'Random',
    baseUpvotes: 867,
  },
  {
    title: 'Pedro Raccoon Circle',
    lore: 'Rakun mungil menari di dalam lensa fisheye bundar mengikuti lagu Italia klasik yang langsung membuat semua orang ikut berputar.',
    category: 'Random',
    baseUpvotes: 892,
  },
  {
    title: 'Maxwell The Spinning Cat',
    lore: 'Model 3D kucing hitam-putih kaku yang melayang dan berputar pelan di atas meja dengan musik ceria.',
    category: 'Random',
    baseUpvotes: 828,
  },
  {
    title: 'Banana Cat Crying',
    lore: 'Kucing berkostum pisang yang menangis tersedu-sedu ditemani suara tangisan auto-tune yang mengundang simpati kocak.',
    category: 'Random',
    baseUpvotes: 855,
  },
  {
    title: 'Sad Hamster Violin',
    lore: 'Hamster bermata besar berkaca-kaca dengan iringan biola sedih saat meminta maaf atas kesalahan kecil.',
    category: 'Random',
    baseUpvotes: 878,
  },
  {
    title: 'Amogus Sus',
    lore: 'Hal apa pun berbentuk kapsul dengan kaca visor otomatis dianggap mencurigakan dan memicu suara darurat Among Us.',
    category: 'Random',
    baseUpvotes: 908,
  },
  {
    title: 'Rickroll Never Gonna Give',
    lore: 'Jebakan tautan tertua di internet yang selalu berhasil membuat korban mendengarkan suara Rick Astley di momen tak terduga.',
    category: 'Random',
    baseUpvotes: 945,
  },
  {
    title: 'Gigachad Ernest Khalimov',
    lore: 'Foto hitam-putih pria berahang kokoh sempurna yang melambangkan ketenangan dan pendapat paling bijaksana.',
    category: 'Random',
    baseUpvotes: 911,
  },
  {
    title: 'Doge Bonk Horny Jail',
    lore: 'Anjing Shiba Inu memukul dengan tongkat bisbol berbunyi bonk terhadap komentar yang mulai melenceng.',
    category: 'Random',
    baseUpvotes: 836,
  },
  {
    title: 'Walter White Falling',
    lore: 'Adegan dramatis terjatuh ke pasir gurun Breaking Bad yang dipakai untuk reaksi berita buruk paling sepele.',
    category: 'Random',
    baseUpvotes: 864,
  },
  {
    title: 'Saul Goodman 3D',
    lore: 'Kamera berputar perlahan mengelilingi wajah pengacara Saul Goodman dengan musik intro gitar yang ikonik.',
    category: 'Random',
    baseUpvotes: 849,
  },
  {
    title: 'Moo Deng Biting Knees',
    lore: 'Bayi kuda nil kerdil super ekspresif asal Thailand yang mendadak jadi bintang meme global karena tingkah agresifnya yang menggemaskan.',
    category: 'Random',
    baseUpvotes: 870,
  },
  {
    title: 'Freaky Bob Calling',
    lore: 'Varian SpongeBob menelepon tengah malam dengan niat absurd yang ramai di editan gambar buram.',
    category: 'Random',
    baseUpvotes: 791,
  },
  {
    title: 'Tim Cheese Saga',
    lore: 'Kelanjutan semesta meme kriminal fiktif seputar John Pork dan karakter tikus bernama Tim Cheese di kolom komentar.',
    category: 'Random',
    baseUpvotes: 802,
  },
  {
    title: 'Mike O’Hearn Baby',
    lore: 'Video binaragawan berambut panjang dengan tatapan dalam diiringi lagu "What Is Love" versi lambat.',
    category: 'Random',
    baseUpvotes: 777,
  },
  {
    title: 'Markiplier E Meme',
    lore: 'Wajah Lord Farquaad digabung Markiplier bertuliskan satu huruf E raksasa sebagai puncak humor absurd era 2018.',
    category: 'Random',
    baseUpvotes: 818,
  },
  {
    title: 'Loss Four Panels',
    lore: 'Komik empat panel sederhana yang polanya selalu disembunyikan di gambar abstrak sampai pembaca sadar dan kesal sendiri.',
    category: 'Random',
    baseUpvotes: 796,
  },
  {
    title: 'Metal Pipe Falling Sound',
    lore: 'Suara dentingan pipa besi jatuh yang memekakkan telinga dan diselipkan secara acak di tengah video tenang.',
    category: 'Random',
    baseUpvotes: 869,
  },
  {
    title: 'Vine Boom Reverb',
    lore: 'Efek suara dentuman berat untuk menegaskan tatapan mata, kalimat ambigu, atau fakta mengejutkan.',
    category: 'Random',
    baseUpvotes: 881,
  },
  {
    title: 'Huh Cat',
    lore: 'Kucing gemuk menoleh bingung sambil mengeluarkan suara "Huh?" berulang kali terhadap penjelasan yang berbelit.',
    category: 'Random',
    baseUpvotes: 860,
  },
  {
    title: 'El Gato Small Kitten',
    lore: 'Anak kucing mungil berdiri kaku di lantai dengan keterangan sederhana berbunyi El Gato.',
    category: 'Random',
    baseUpvotes: 753,
  },
  {
    title: 'Monday Left Me Broken',
    lore: 'Kucing putih bernyanyi merdu tentang beratnya hari Senin dengan ekspresi wajah tenang yang aneh.',
    category: 'Random',
    baseUpvotes: 785,
  },
  {
    title: 'Josh Hutcherson Whistle',
    lore: 'Jebakan suntingan video yang tiba-tiba berganti menjadi foto Josh Hutcherson tahun 2014 dengan lagu Whistle.',
    category: 'Random',
    baseUpvotes: 833,
  },
  {
    title: 'Kevin James Shrug',
    lore: 'Foto aktor Kevin James mengangkat bahu sambil tersenyum canggung ketika tertangkap basah melakukan kesalahan konyol.',
    category: 'Random',
    baseUpvotes: 771,
  },
  {
    title: 'Stonks Man Meme Man',
    lore: 'Kepala manekin 3D berjas jas rapi dengan kata salah eja untuk menyindir keputusan finansial atau logika yang keliru.',
    category: 'Random',
    baseUpvotes: 857,
  },
  {
    title: 'Wojak Doomer 3AM',
    lore: 'Ilustrasi karakter hitam-putih merenung di tengah malam mendengarkan musik sedih sambil menatap layar ponsel.',
    category: 'Random',
    baseUpvotes: 764,
  },
  {
    title: 'Shrek Is Love',
    lore: 'Meme internet lawas yang tetap hidup sebagai simbol humor surealis komunitas forum dan media sosial.',
    category: 'Random',
    baseUpvotes: 742,
  },
  {
    title: 'Darude Sandstorm',
    lore: 'Jawaban universal nan jahil setiap kali seseorang bertanya judul lagu latar di kolom komentar video apa pun.',
    category: 'Random',
    baseUpvotes: 814,
  },
  {
    title: 'Harambe Timeline Shift',
    lore: 'Teori konspirasi kocak bahwa seluruh keanehan dunia modern dimulai sejak insiden kebun binatang tahun 2016.',
    category: 'Random',
    baseUpvotes: 805,
  },
  {
    title: 'Morbius Sweep',
    lore: 'Lelucon kolektif berpura-pura bahwa film Morbius adalah karya sinema terlaris hingga menciptakan kata "It’s Morbin Time".',
    category: 'Random',
    baseUpvotes: 759,
  },
  {
    title: 'Low Taper Fade',
    lore: 'Meme potongan rambut yang secara bercanda diklaim Ninja masih tetap masif dan relevan sepanjang waktu.',
    category: 'Random',
    baseUpvotes: 888,
  },
  {
    title: 'Coughing Baby Vs Hydrogen Bomb',
    lore: 'Format perbandingan kekuatan paling tidak seimbang di internet untuk menggambarkan pertandingan yang jelas berat sebelah.',
    category: 'Random',
    baseUpvotes: 837,
  },
  {
    title: 'Garten Of Banban Peak',
    lore: 'Maskot monster taman kanak-kanak warna-warni yang menjadi ikon meme gim horor absurd berbudget minimal.',
    category: 'Random',
    baseUpvotes: 727,
  },
  {
    title: 'Shadow Wizard Money Gang',
    lore: 'Kelompok penyihir berjubah neon penggemar mantra dan emas yang dipopulerkan oleh tag produser musik underground.',
    category: 'Random',
    baseUpvotes: 810,
  },
  {
    title: 'Duolingo Owl Threat',
    lore: 'Burung hantu hijau ramah yang berubah menjadi penguntit menyeramkan jika pengguna melewatkan satu hari belajar bahasa.',
    category: 'Random',
    baseUpvotes: 897,
  },
];

interface CulturalArc {
  suffix: string;
  lorePrefix: string;
  loreSuffix: string;
  upvoteFactor: number;
}

const CULTURAL_ARCS: CulturalArc[] = [
  {
    suffix: '',
    lorePrefix: '',
    loreSuffix: '',
    upvoteFactor: 1,
  },
  {
    suffix: ' — Versi Tongkrongan Indo',
    lorePrefix: 'Adaptasi lokal di tongkrongan dan grup WhatsApp Indonesia dari ',
    loreSuffix:
      ' yang sering dipakai untuk mencairkan suasana atau menyindir teman satu circle.',
    upvoteFactor: 0.72,
  },
  {
    suffix: ' — Editan Phonk FYP',
    lorePrefix: 'Varian video editan berkecepatan tinggi dengan bass phonk dan efek glitch dari ',
    loreSuffix:
      ' yang kerap muncul beruntun di beranda tengah malam.',
    upvoteFactor: 0.64,
  },
  {
    suffix: ' — Lore & Debat Komunitas',
    lorePrefix: 'Pembahasan mendalam penuh teori konspirasi bercanda seputar asal-usul ',
    loreSuffix:
      ' yang memicu ribuan balasan panjang di kolom komentar.',
    upvoteFactor: 0.55,
  },
  {
    suffix: ' — Speedrun & Tier List Era',
    lorePrefix: 'Momen ketika tren ini masuk papan peringkat Tier S dan ditiru kreator lewat tantangan kilat: ',
    loreSuffix: '',
    upvoteFactor: 0.48,
  },
];

function buildThousandBrainrots(): BrainrotEntry[] {
  const result: BrainrotEntry[] = [];
  const baseTimeMs = new Date('2026-11-25T12:00:00.000Z').getTime();

  // Outer loop by arc ensures the top 200 entries are clean canonical famous titles,
  // followed by the 800 cultural spin-offs/variants -> exact 1000 famous brainrot entries.
  CULTURAL_ARCS.forEach((arc, arcIndex) => {
    CORE_CONCEPTS.forEach((concept, conceptIndex) => {
      const globalIndex = arcIndex * CORE_CONCEPTS.length + conceptIndex;
      const serial = String(globalIndex + 1).padStart(4, '0');
      const title = `${concept.title}${arc.suffix}`;

      const lowerLoreStart =
        concept.lore.charAt(0).toLowerCase() + concept.lore.slice(1);
      const lore =
        arcIndex === 0
          ? concept.lore
          : `${arc.lorePrefix}${concept.title}: ${lowerLoreStart}${arc.loreSuffix}`;

      const jitter = ((conceptIndex * 17 + arcIndex * 31) % 45) - 20;
      const upvotes = Math.max(
        12,
        Math.round(concept.baseUpvotes * arc.upvoteFactor) + jitter
      );

      const createdAt = new Date(
        baseTimeMs - globalIndex * 42 * 60 * 1000
      ).toISOString();

      result.push({
        id: `brainrot-${serial}`,
        title,
        lore,
        category: concept.category,
        image_url: arcIndex === 0 ? concept.image_url ?? null : null,
        upvotes,
        created_at: createdAt,
      });
    });
  });

  return result;
}

export const FAMOUS_1000_BRAINROTS: BrainrotEntry[] = buildThousandBrainrots();
