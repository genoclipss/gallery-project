# 3D Gallery Photography

Galeri foto 3D infinite-scroll berbasis React Three Fiber, dengan efek kain/blur shader kustom. Proyek ini sudah di-scaffold dengan Vite + React + TypeScript + Tailwind CSS, mengikuti struktur folder ala **shadcn/ui** (`src/components/ui`, `src/lib/utils.ts`).

## Struktur Proyek

```
gallery-project/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── 3d-gallery-photography.tsx   # Komponen utama
│   │       └── demo.tsx                     # Contoh penggunaan
│   ├── lib/
│   │   └── utils.ts                         # Helper cn() ala shadcn
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── .gitignore
```

> **Kenapa `src/components/ui`?** Ini adalah lokasi default yang dipakai shadcn CLI (`components.json` → `aliases.ui`). Menyimpan komponen di sini menjaga konsistensi import (`@/components/ui/...`) dan memudahkan jika nanti ingin menambah komponen shadcn lain (Button, Dialog, dll) tanpa konflik path.

## Dependensi Utama

| Package | Kegunaan |
|---|---|
| `three` | Engine WebGL |
| `@react-three/fiber` | React renderer untuk Three.js |
| `@react-three/drei` | Helper (mis. `useTexture`) |
| `clsx` + `tailwind-merge` | Untuk fungsi `cn()` ala shadcn |
| `lucide-react` | Ikon (jika dibutuhkan komponen lain) |

## Instalasi & Menjalankan Lokal

Pastikan Node.js ≥ 18 sudah terpasang.

```bash
# 1. Install semua dependency
npm install

# 2. Jalankan dev server
npm run dev

# 3. Buka http://localhost:5173
```

Build production:

```bash
npm run build
npm run preview
```

## Setup shadcn/ui (opsional, jika ingin menambah komponen shadcn lain)

Proyek ini sudah punya Tailwind + TypeScript, jadi tinggal inisialisasi shadcn CLI:

```bash
npx shadcn@latest init
```

Saat ditanya lokasi komponen, arahkan ke `src/components/ui` agar sinkron dengan komponen galeri yang sudah ada. Setelah itu bisa tambah komponen lain misalnya:

```bash
npx shadcn@latest add button
```

## Kustomisasi Komponen

`InfiniteGallery` menerima props berikut (lihat `src/components/ui/3d-gallery-photography.tsx`):

- `images`: array `string` atau `{ src, alt }`
- `speed`: kecepatan auto-play
- `visibleCount`: jumlah panel yang terlihat sekaligus
- `fadeSettings` / `blurSettings`: kontrol fade & blur berdasarkan posisi kedalaman
- `className` / `style`: styling container

Kontrol interaksi: scroll mouse, tombol panah keyboard, atau sentuhan (auto-play kembali aktif setelah 3 detik idle).

Ganti gambar di `src/components/ui/demo.tsx` sesuai kebutuhan.

## Cara Upload/Push ke GitHub

Jika folder ini belum jadi git repository:

```bash
cd gallery-project
git init
git add .
git commit -m "Initial commit: 3D gallery photography project"
```

Buat repository baru di GitHub (lewat web atau `gh` CLI):

```bash
# Via GitHub CLI (opsional, jika sudah login "gh auth login")
gh repo create nama-repo-kamu --public --source=. --remote=origin --push
```

Atau cara manual tanpa `gh` CLI:

1. Buat repo baru di https://github.com/new (jangan centang "Initialize with README").
2. Hubungkan remote dan push:

```bash
git remote add origin https://github.com/USERNAME/nama-repo-kamu.git
git branch -M main
git push -u origin main
```

Setelah itu proyek sudah tersedia di GitHub dan siap di-clone atau di-deploy (misalnya ke Vercel/Netlify — cukup arahkan build command `npm run build` dan output directory `dist`).

## Deploy ke GitHub Pages (Penting!)

⚠️ **Jangan** pakai fitur "Deploy from a branch" dengan branch `main` folder `/root` langsung dari source code ini. GitHub Pages hanya menyajikan file apa adanya, sedangkan project ini masih source code Vite (`.tsx`) yang harus **di-build** dulu menjadi HTML/CSS/JS statis — kalau tidak, hasilnya layar putih kosong.

Ada 2 cara yang benar:

### Cara A — Otomatis via GitHub Actions (direkomendasikan)

Project ini sudah dilengkapi workflow di `.github/workflows/deploy.yml` yang otomatis build & deploy setiap kali kamu push ke branch `main`.

Langkah setelah push ke GitHub:

1. Buka repo di GitHub → **Settings → Pages**
2. Pada bagian **Source**, pilih **"GitHub Actions"** (bukan "Deploy from a branch")
3. Push ulang / trigger workflow (push commit apa saja, atau jalankan manual lewat tab **Actions → Deploy to GitHub Pages → Run workflow**)
4. Tunggu build selesai (cek tab **Actions**), lalu situs akan otomatis live di `https://USERNAME.github.io/NAMA-REPO/`

Workflow ini otomatis menyetel `base` path sesuai nama repository, jadi asset (JS/CSS) tidak akan 404.

### Cara B — Build manual lalu deploy folder `dist`

Jika ingin tetap pakai "Deploy from a branch":

```bash
# 1. Sesuaikan base path di vite.config.ts dengan nama repo kamu, misal:
# base: "/nama-repo-kamu/"

# 2. Build
npm run build
# hasil build ada di folder dist/

# 3. Deploy folder dist/ ke branch gh-pages menggunakan package gh-pages
npm install --save-dev gh-pages
npx gh-pages -d dist
```

Lalu di **Settings → Pages**, pilih source **"Deploy from a branch"** → branch **`gh-pages`** → folder **`/ (root)`**.

> Pastikan nilai `base` di `vite.config.ts` sama persis dengan nama repository GitHub kamu (case-sensitive), termasuk garis miring di awal dan akhir, contoh `/gallery-project/`. Kalau repo-nya adalah `username.github.io` (root domain), gunakan `base: "/"`.

## Catatan

- Gambar contoh memakai URL Unsplash langsung; ganti dengan aset milikmu sendiri untuk produksi.
- Jika WebGL tidak didukung browser, komponen otomatis fallback ke grid gambar biasa.
