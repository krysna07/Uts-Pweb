# Kami Adalah K & D - Portfolio Website

Website portofolio untuk dua mahasiswa yang belajar tentang web development dan desain. Kami masih dalam tahap pembelajaran, namun memiliki semangat untuk terus berkembang dan mencoba hal-hal baru.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Struktur Proyek](#struktur-proyek)
- [Build & Deploy](#build--deploy)

## Tentang Proyek

Proyek ini adalah website portofolio kolaboratif yang menampilkan:

- **Landing Page** - Pengenalan diri dan visi kami
- **Galeri Proyek** - Showcase karya-karya web dan desain
- **Halaman About** - Informasi lebih detail tentang tim
- **Halaman Contact** - Informasi kontak untuk kolaborasi
- **Dark Mode** - Support untuk dark/light theme

Website ini dibuat untuk memperkenalkan diri, membangun personal branding, dan menunjukkan progress pembelajaran kami dalam web development.

##  Fitur

- ✅ Desain responsive (mobile-first)
- ✅ Dark mode & light mode toggle
- ✅ Galeri proyek interaktif dengan preview
- ✅ Struktur halaman terorganisir (home, about, projects, contact)
- ✅ SEO-friendly
- ✅ Performance optimization
- ✅ Built dengan React 19 dan Next.js 16

##  Teknologi

**Frontend:**
- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

**Tools:**
- [ESLint](https://eslint.org/) - Code linting
- [PostCSS](https://postcss.org/) - CSS processing

##  Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda sudah install:

- **Node.js** v18 atau lebih baru ([Download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, atau **bun** (npm biasanya sudah termasuk dengan Node.js)

Cek versi Node.js:
```bash
node --version
npm --version
```

##  Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/Uts-Pweb.git
cd Uts-Pweb
```

### 2. Install Dependencies

Pilih salah satu package manager yang Anda gunakan:

**Menggunakan npm:**
```bash
npm install
```

**Menggunakan yarn:**
```bash
yarn install
```

**Menggunakan pnpm:**
```bash
pnpm install
```

**Menggunakan bun:**
```bash
bun install
```

## Menjalankan Secara Lokal

### Development Server

Jalankan development server:

```bash
npm run dev
```

Output akan menunjukkan URL server, biasanya:
```
> Local:        http://localhost:3000
```

Buka browser Anda dan navigasi ke [http://localhost:3000](http://localhost:3000)

Halaman akan auto-update saat Anda edit file (hot reload).

### Production Build

Untuk membuat production build:

```bash
npm run build
```

Kemudian jalankan production server:

```bash
npm start
```

### Linting

Untuk mengecek code quality:

```bash
npm run lint
```

##  Struktur Proyek

```
Uts-Pweb/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── projects/
│   │   ├── page.tsx         # Projects gallery
│   │   └── [slug]/
│   │       └── page.tsx     # Project detail page
│   ├── error.tsx            # Error handling
│   └── loading.tsx          # Loading component
├── components/              # Reusable React components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── DarkModeToggle.tsx   # Theme toggle
│   ├── ThemeProvider.tsx    # Theme provider
│   ├── ProjectCard.tsx      # Project card component
│   ├── ProjectPreview.tsx   # Project preview
│   └── TeamCard.tsx         # Team member card
├── data/                    # Static data
│   └── projects.json       # Projects data
├── public/                  # Static assets
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS config
└── README.md               # Project documentation
```

##  Konfigurasi

### Environment Variables (Opsional)

Jika ada kebutuhan untuk environment variables, buat file `.env.local`:

```bash
# .env.local
# Tambahkan variabel sesuai kebutuhan
```

##  Tips Pengembangan

- **Hot Reload**: Perubahan file otomatis ter-reload di browser
- **TypeScript**: Kami menggunakan TypeScript untuk type safety
- **Tailwind CSS**: Gunakan class utilities untuk styling
- **Components**: Buat reusable components di folder `components/`
- **Data**: Kelola data proyek di `data/projects.json`

##  Build & Deploy

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Buka [Vercel](https://vercel.com)
3. Klik "New Project" dan import repository
4. Vercel akan auto-detect Next.js config
5. Klik "Deploy"

### Deploy ke Platform Lain

Website ini bisa di-deploy ke:
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com/)
- Server Linux dengan Node.js

##  Kontribusi & Support

Jika ada pertanyaan atau saran, silakan:
- Buka [Issues](../../issues)
- Buat Pull Request untuk kontribusi

##  Lisensi

Proyek ini dibuat untuk pembelajaran. Silakan gunakan sebagai referensi.

---

**Dibuat dengan  oleh Krysna & Dekrisna**
