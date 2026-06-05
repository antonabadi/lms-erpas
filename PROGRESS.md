# Dokumentasi Pengembangan ERPAS LMS Prototype

Dokumen ini mencatat kemajuan pengembangan berdasarkan `gemini-blueprint-v1.txt` dan `framework.txt`.

## 🚀 Status Proyek: Fase Fondasi & UI Dasar (Minggu 2)

### 1. Teknologi yang Digunakan (Tech Stack)
- **Framework:** Next.js 14 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS
- **Komponen UI:** DaisyUI (Plugin Tailwind)
- **Ikon:** Lucide React
- **Data Strategy:** Local Mock Data (Simulasi API)

### 2. Fitur yang Sudah Diimplementasikan
#### Fondasi Proyek
- [x] Setup struktur folder `src/` directory.
- [x] Konfigurasi Tailwind CSS & DaisyUI (Tema: Light/Winter).
- [x] Sistem **Mock Data** (`mock-data.ts`) untuk simulasi profil user, daftar sekolah, dan silabus pelajaran.

#### Kelompok 1: Akses & Autentikasi
- [x] **Halaman Login**: UI dasar dengan pemilih unit sekolah (Multi-tenant) dan form input mobile-friendly.

#### Kelompok 2: Sisi Siswa
- [x] **Dashboard Utama**: Header profil, widget "Lanjutkan Belajar", dan grid mata pelajaran.
- [x] **Bottom Navigation**: Navigasi khusus mobile untuk akses cepat Beranda, Kursus, Tugas, dan Profil.
 [x] **Daftar Isi Kursus**: Halaman detail mata pelajaran menggunakan sistem **Accordion** untuk Bab dan materi.
 [x] **Halaman Ruang Belajar (Lesson Player)**: Komponen pemutar video embed dan pembaca teks dengan navigasi drawer.

### 3. Fitur yang BELUM Diimplementasikan (Sisa Pekerjaan)
#### Kelompok 2: Sisi Siswa
- [ ] **Modul Kuis**: UI pengerjaan soal, Countdown Timer, dan navigasi nomor soal.

#### Kelompok 3: Sisi Pengajar (Guru)
- [ ] **Dasbor Guru**: Statistik kelas yang diajar.
- [ ] **Manajemen Materi**: Form untuk upload materi baru atau membuat kuis.
- [ ] **Buku Nilai (Gradebook)**: Tabel rekapitulasi nilai siswa.

#### Infrastruktur & Logic
- [ ] **Routing Logic**: Menghubungkan tombol "Masuk" di Login ke Dashboard secara fungsional.
- [ ] **State Management**: Menyimpan status login sederhana secara lokal.
- [ ] **Integrasi API**: Transisi dari `mock-data.ts` ke API asli (jika backend sudah siap).

### 4. Struktur Folder Saat Ini
```text
/home/raito/Mount/www/erpas-lms/
├── src/app/           # Routing & Halaman (Login, Dashboard, Courses)
├── components/        # Komponen UI Reusable (BottomNav, dll)
├── mock-data.ts       # Pusat data simulasi
├── globals.css        # Konfigurasi Tailwind Global
├── tailwind.config.ts # Konfigurasi Tema & DaisyUI
└── package.json       # Daftar dependensi proyek
```

---
*Terakhir diperbarui: Juni 2024*
*Catatan: Fokus selanjutnya adalah Dashboard Guru dan Manajemen Materi.*