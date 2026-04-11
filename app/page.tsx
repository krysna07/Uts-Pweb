import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto pt-32 pb-32 text-center">
        
        {/* Background Blur */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Kami Adalah{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            K & D
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kami dua mahasiswa yang lagi belajar bikin website. Masih banyak yang belum kami kuasai,
          tapi kami terus mencoba dan berkembang dari setiap project yang kami buat.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg transition hover:bg-blue-700 hover:scale-105"
          >
            Lihat Project
          </Link>

          <a
            href="#contact"
            className="px-8 py-4 border border-slate-500 text-slate-300 rounded-full transition hover:bg-slate-800 hover:scale-105"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-6xl mx-auto py-20 text-center">
        
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Mau kenal kami lebih jauh?
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Cek halaman tentang kami untuk lihat siapa yang ada di balik project ini.
        </p>

        <Link
          href="/about"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full transition hover:bg-blue-700 hover:scale-105"
        >
          Tentang Kami
        </Link>

      </section>
    </div>
  );
}