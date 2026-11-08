# Portofolio Personal Muhammad Adzka Arroya (Astro + Tailwind CSS)

Website portofolio berkarakter **Neo-Brutalism Disiplin** yang dibangun khusus untuk menampilkan bukti sistem nyata karya **Muhammad Adzka Arroya** (Mahasiswa S1 Sistem Informasi Telkom University, Full-Stack Builder, dan Pengajar IT/STEM).

---

## ⚡ Nilai Utama & Positioning
> **"Saya membangun sistem yang benar-benar dipakai orang, dan saya bisa menjelaskannya sampai orang non-teknis paham."**

- **Platform Digital Desa Denanyar**: Melayani 4.500+ warga desa (1.503 KK, 19 RT) dengan sistem Surat Menyurat Online mandiri dan dashboard visualisasi demografi real-time (Laravel, Livewire, Tailwind CSS, Docker Sail, MySQL).
- **Juara 1 BizCREATE 2026**: Platform freelance kampus hiper-lokal **TelUGig** dengan model ekonomi inovatif (Zero-Fee bagi mahasiswa, 15% Client Success Fee, dan Escrow/Mandatory DP).
- **Pengajar & Asisten Riset**: Membimbing 5 modul lab di SAG Lab Telkom University, Master Teacher Roblox Studio di Ruangguru (beasiswa resmi, bahasa Lua), guru IT di Sekolah Hamidah Sampurna (SD & SMP), serta periset Machine Learning di PUI-PT AICOMS.

---

## 🎨 Karakteristik Desain (Disciplined Neo-Brutalism)
- **Border**: Hitam pekat tebal 3px pada semua kartu, tombol, dan input.
- **Shadow**: Bayangan keras offset (`5px 5px 0 #000` / `8px 8px 0 #000`) **tanpa blur**.
- **Warna**: Palet flat tanpa gradient:
  - Krem Kanvas: `#F4F0E6`
  - Putih Kartu: `#FFFFFF`
  - Hitam Tinta: `#0A0A0A`
  - Merah Marun (Telkom University): `#B3202A`
  - Kuning Highlight: `#FFD23F`
  - Biru Cobalt Aksen: `#3A5BFF`
- **Tipografi**:
  - Headings: `Archivo Black` (Google Fonts)
  - Body: `Space Grotesk` (Google Fonts)
  - Labels / Metadata: `JetBrains Mono` (Google Fonts)
- **Aturan Ketat**: Tanpa gradient ungu/biru, tanpa glassmorphism, tanpa emoji sebagai ikon (semua ikon SVG custom stroke 2.5–3), tanpa bar persentase semu ("Laravel 90%").

---

## 📁 Struktur Folder Proyek
```text
├── public/
│   └── images/               # Asset autentik (foto Adzka, logo Sragen, BizCREATE, mockup desa)
├── screenshots/              # Tangkapan layar viewport 375px, 768px, 1440px
├── src/
│   ├── components/           # Komponen Astro modular tanpa library UI pihak ketiga
│   │   ├── Navbar.astro      # Sticky header dengan mobile drawer
│   │   ├── Hero.astro        # Headline raksasa, profil foto brutalist, badge juara
│   │   ├── Ticker.astro      # 1 strip marquee capaian
│   │   ├── ProofStrip.astro  # 4 angka bukti nyata
│   │   ├── CaseStudies.astro # Studi kasus mendalam: Desa Denanyar & TelUGig
│   │   ├── Experience.astro  # Timeline karier & akademik (hasil di depan)
│   │   ├── TeachingAndResearch.astro # Blok khusus SAG Lab, Ruangguru, Hamidah, AICOMS
│   │   ├── Skills.astro      # Matriks keahlian terkelompok (tanpa % palsu)
│   │   ├── Certifications.astro # Grid sertifikasi resmi
│   │   ├── RateCard.astro    # 3 paket layanan realistis
│   │   ├── Testimonials.astro# Komponen testimoni dengan toggle showTestimonials
│   │   ├── Contact.astro     # Terminal kontak brutalist WhatsApp, Email, LinkedIn
│   │   └── Footer.astro      # Penutup minimalis
│   ├── data/
│   │   └── content.ts        # Single source of truth untuk seluruh teks & metadata
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout dasar HTML5, SEO meta, font loader, OpenGraph
│   └── pages/
│       └── index.astro       # Halaman utama portofolio
├── TODO.md                   # Rekonsiliasi data CV vs Portofolio & daftar placeholder [ISI: ...]
├── astro.config.mjs          # Konfigurasi Astro + Tailwind CSS v4
├── package.json
└── README.md
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 20 ke atas (diuji pada Node v24)
- npm versi 10 ke atas

### 1. Instal Dependensi
```bash
npm install
```

### 2. Jalankan Mode Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build statis tersimpan di folder `dist/` dan siap diunggah ke hosting mana pun.

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## 🌐 Panduan Deploy

### Vercel
1. Hubungkan repositori GitHub ke dashboard [Vercel](https://vercel.com).
2. Framework preset akan terdeteksi otomatis sebagai **Astro**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Klik **Deploy**.

### Netlify
1. Hubungkan repositori ke [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Klik **Deploy Site**.

### GitHub Pages
1. Pastikan opsi GitHub Actions untuk Pages aktif.
2. Gunakan workflow standar Astro GitHub Pages (`astro-build/actions`).

---

## 📋 Manajemen Konten & Kustomisasi
Semua teks, kontak, proyek, sertifikasi, dan layanan berada di file:
👉 `src/data/content.ts`

Untuk memperbarui nomor WhatsApp, email, tautan LinkedIn, atau mengisi rincian tarif paket layanan, cukup edit file tersebut tanpa perlu mengubah file komponen antarmuka.

Daftar placeholder bertanda `[ISI: ...]` dan catatan rekonsiliasi data tercatat lengkap di:
👉 `TODO.md`
