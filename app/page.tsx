import Link from "next/link";
import TeamCard from "@/components/TeamCard";
import { Layers, Zap, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          Kami Adalah
          K & D <span className="inline-block"></span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dua mahasiswa yang baru mulai belajar coding dan desain web. Kami masih banyak belajar,
          tapi semangat untuk terus berkembang dan mencoba hal-hal baru selalu ada.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Jelajahi Karya Kami
        </Link>
      </section>

      {/* Why This Website Section */}
      <section className="w-full max-w-6xl mx-auto py-20 border-t border-slate-100 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Mengapa Website Ini?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Website ini adalah proyek belajar kami bersama. Dibuat dari nol sebagai tugas kuliah, sekaligus jadi tempat kami mencoba Next.js, TypeScript, dan Tailwind CSS untuk pertama kalinya secara serius.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Masih jauh dari sempurna, tapi setiap baris kode di sini adalah hasil kerja keras dan proses belajar yang nyata.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <Zap className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Berperforma Tinggi</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Waktu muat dioptimalkan dan perutean mulus menggunakan Next.js App Router.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <Layers className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Skalabel</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Dibangun dengan arsitektur berbasis komponen untuk iterasi yang cepat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="w-full max-w-6xl mx-auto py-20 border-t border-slate-100 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Kenali Tim Kami</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Dua keahlian yang berbeda, satu visi yang bersatu. Temukan pikiran di balik kode.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <TeamCard
            name="I Gusti Krysna"
            role="UI/UX & Desain"
            image="https://via.placeholder.com/256x256/3b82f6/ffffff?text=Krysna"
            description="Masih belajar merancang tampilan yang nyaman dipakai. Suka ngulik desain dan mencoba membuat sesuatu yang enak dilihat, meskipun masih banyak yang perlu dipelajari."
            skills={["Figma", "Tailwind CSS", "HTML/CSS", "Canva"]}
          />
          <TeamCard
            name="Gede Dekrisna"
            role="Logika & Pengembangan"
            image="https://via.placeholder.com/256x256/10b981/ffffff?text=Dekrisna"
            description="Masih dalam proses memahami logika pemrograman dan cara kerja web. Senang mencoba hal baru meski kadang error-nya lebih banyak dari yang diharapkan."
            skills={["Next.js", "JavaScript", "React", "TypeScript"]}
          />
        </div>
      </section>
    </div>
  );
}
