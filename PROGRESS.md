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
 [x] **Logic Autentikasi & Persistensi**: AuthContext dengan dukungan `localStorage` agar login tidak hilang saat refresh.

#### Kelompok 2: Sisi Siswa
- [x] **Dashboard Utama**: Header profil, widget "Lanjutkan Belajar", dan grid mata pelajaran.
- [x] **Bottom Navigation**: Navigasi khusus mobile untuk akses cepat Beranda, Kursus, Tugas, dan Profil.
- [x] **Daftar Isi Kursus (Course Detail)**: Struktur silabus per bab (accordion) dengan indikator status materi.
 [x] **Modul Kuis**: UI pengerjaan soal (Halaman Dasar).
 [x] **Ruang Belajar (Lesson Player)**: Video player embed & reader teks materi.

#### Kelompok 3: Sisi Pengajar (Guru)
- [x] **Dasbor Guru**: Ringkasan statistik (Siswa, Materi, Nilai Rata-rata).
- [x] **Buku Nilai (Gradebook)**: Tabel rekapitulasi nilai siswa per kuis.
- [x] **Manajemen Materi**: Form untuk upload materi baru atau membuat kuis (CRUD).

### 3. Fitur yang BELUM Diimplementasikan (Sisa Pekerjaan)
#### Infrastruktur & Logic
- [x] **Auth Context**: Implementasi global state.
- [x] **Routing Logic**: Redirect login berdasarkan role.
- [x] **State Management**: Menyimpan status login sederhana secara lokal.
- [x] **Route Guarding**: Proteksi halaman dengan penanganan *loading state* (mencegah *flicker* saat refresh).
- [ ] **Integrasi API**: Transisi dari `mock-data.ts` ke API asli.
- [ ] **Quiz Logic**: Sistem penilaian kuis dan pengiriman hasil ke "Buku Nilai".

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
*Catatan: Fondasi Autentikasi dan Navigasi Kursus selesai. Pekerjaan berikutnya: Logika Kuis atau Pembersihan UI (Logout & Profile).*