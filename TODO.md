# TODO & Catatan Rekonsiliasi Data

Dokumen ini mencatat semua placeholder data `[ISI: ...]` yang perlu diisi oleh Adzka Arroya, serta rekonsiliasi perbedaan data antara `CV_ROY.pdf` dan `PORTOFOLIO_MUHAMMAD_ADZKA_ARROYA.pdf`.

---

## 1. Rekonsiliasi Perbedaan Data (CV vs Portofolio)
*Catatan: Sesuai pedoman, data pada CV dijadikan acuan utama situs ini.*

| Aspek | Di CV_ROY.pdf | Di Portofolio PDF | Keputusan yang Digunakan di Situs |
| :--- | :--- | :--- | :--- |
| **Masa Kuliah Telkom University** | 2025 - Present (S1 Sistem Informasi) | 2024 - Now | **2025 - Sekarang** (Mengikuti CV) |
| **Pendidikan Menengah / Tahfidz** | Pondok Tahfidz Sulaimaniyah (Hafidz 30 Juz) - Graduated 2019 | Süleymaniye Kursu (2021 - 2024) | **Pondok Tahfidz Sulaimaniyah (Lulus 2019, Hafidz 30 Juz)** (Mengikuti CV) |
| **Peran di Rudy Project Indonesia** | Social Media Team & Barista (Jan 2023 - Jun 2023) | Web Dev & Barista | **Social Media Team & Barista (Jan - Jun 2023)** (Mengikuti CV) |
| **Rentang Waktu Hamidah Group (Web)** | Web Maintenance Specialist (July 2026 - November 2026) | Juli 2026 - November 2026 | **Juli 2026 - November 2026** (Konsisten) |
| **Rentang Waktu Sekolah Hamidah (Guru)** | IT Teacher (July 2026 - Present) | Digabung di Work Experience (Hamidah Group) | **Juli 2026 - Sekarang** (Mengikuti CV) |

---

## 2. Pilihan Headline Hero (Disimpan untuk Alternatif)
- **Opsi Aktif di Situs** (dikoreksi sesuai fakta bahwa proyek Denanyar dikerjakan 2 orang):
  > *"Website desa untuk 4.500 warga. Dibangun berdua dari nol."*
- **Opsi Alternatif 1**:
  > *"Website desa untuk 4.500 warga. Dibangun berdua, dipakai nyata."*
- **Opsi Alternatif 2**:
  > *"Bangun sistem yang nyata dipakai. Ajar orang sampai paham."*
- **Opsi Alternatif 3**:
  > *"Mahasiswa Sistem Informasi yang sudah punya klien dan produk teruji."*

---

## 3. Daftar Placeholder Data `[ISI: ...]` yang Perlu Dilengkapi

### A. Layanan & Rate Card (`src/data/content.ts`)
Semua harga, durasi, dan rincian kuota di bawah ini sengaja tidak dikarang dan menunggu masukan pemilik:
1. **Paket 1: Website Layanan Publik / Instansi Desa**
   - Biaya: `[ISI: Rentang biaya riil, misal Rp 5.000.000 - Rp 12.000.000 tergantung kompleksitas modul]`
   - Estimasi Durasi: `[ISI: Estimasi waktu pengerjaan, misal 3 - 5 minggu]`
   - Ruang Lingkup Detail: `[ISI: Jumlah revisi, masa garansi/maintenance setelah serah terima]`
2. **Paket 2: Dashboard Business Intelligence & Visualisasi Data**
   - Biaya: `[ISI: Rentang biaya riil, misal Rp 3.500.000 - Rp 8.000.000]`
   - Estimasi Durasi: `[ISI: Estimasi waktu pengerjaan, misal 2 - 3 minggu]`
   - Ruang Lingkup Detail: `[ISI: Jumlah sumber data / sheet / database yang diintegrasikan]`
3. **Paket 3: Pelatihan & Mentoring IT / STEM**
   - Biaya: `[ISI: Rate per sesi atau per hari workshop, misal Rp 500.000 - Rp 1.500.000 / sesi]`
   - Estimasi Durasi: `[ISI: Durasi standar modul atau jumlah pertemuan per batch]`
   - Ruang Lingkup Detail: `[ISI: Batas maksimal peserta per kelas dan fasilitas silabus]`

---

### B. Testimoni Klien & Rekan
Seksi testimoni memiliki konfigurasi `showTestimonials: false` di `src/data/content.ts` secara default agar tidak menampilkan ulasan palsu. Komponen visualnya sudah siap pakai 100% begitu data berikut diisi:
1. **Testimoni 1 (Pemerintah Desa Denanyar)**
   - Kutipan: `[ISI: Testimoni asli dari Kepala Desa atau Perangkat Desa Denanyar mengenai efisiensi sistem surat menyurat online]`
   - Nama: `[ISI: Nama Kepala Desa / Sekretaris Desa Denanyar]`
   - Jabatan: `[ISI: Jabatan resmi di Pemerintah Desa Denanyar]`
2. **Testimoni 2 (SAG Lab / Pembina Akademik)**
   - Kutipan: `[ISI: Ulasan dosen pembina atau koordinator asisten terkait kinerja praktikum 5 modul]`
   - Nama: `[ISI: Nama Dosen / Koordinator Lab SAG]`
   - Jabatan: `[ISI: Jabatan akademik di Telkom University]`
3. **Testimoni 3 (Sekolah Hamidah / Ruangguru)**
   - Kutipan: `[ISI: Ulasan dari rekan pengajar atau koordinator program beasiswa Roblox]`
   - Nama: `[ISI: Nama Koordinator Pendidikan / Kepala Sekolah]`
   - Jabatan: `[ISI: Lembaga terkait]`

---

### C. Asset & Tautan Eksternal
1. **Live URL Platform Desa Denanyar**:
   - **TERVERIFIKASI & TERPASANG**: `https://denanyar-tangen.desa.id/`
   - Screenshot antarmuka resmi terpasang di `public/images/denanyar-hero.jpg` dan tombol navigasi langsung mengarah ke portal resmi desa.
2. **Pitch Deck / Dokumen TelUGig**:
   - `[ISI: Tautan file pitch deck TelUGig Juara 1 jika ingin dapat diunduh publik]`
