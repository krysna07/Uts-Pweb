import { Users, Workflow, Code2, Layers } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Tim K&D",
};

export default function About() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
          Tentang Tim
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Kami dua mahasiswa yang lagi belajar bareng membuat website. Masih banyak yang belum kami kuasai, tapi kami percaya proses belajar yang jujur adalah langkah terbaik.
        </p>
      </div>

      {/* Team Division */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <Users className="text-blue-500 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Anggota Tim & Peran</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Krysna</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Lead UI/UX & Desain</p>
            <p className="text-slate-600 dark:text-slate-400">
              Masih dalam tahap belajar mendesain tampilan website yang menarik dan mudah digunakan. Krysna mencoba memahami cara membuat antarmuka yang nyaman dengan bantuan Figma dan Tailwind CSS, meskipun hasilnya masih terus diperbaiki.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dekrisna</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Lead Logika & Pengembangan</p>
            <p className="text-slate-600 dark:text-slate-400">
              Baru mulai belajar dunia pengembangan web dan masih sering bergulat dengan error. Dekrisna mencoba memahami JavaScript, React, dan Next.js secara bertahap sambil mengerjakan proyek ini sebagai sarana belajar yang nyata.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <Workflow className="text-blue-500 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cara Kami Bekerja</h2>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
          <div className="relative z-10 grid gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Ideasi & Wireframing</h4>
                <p className="text-slate-600 dark:text-slate-400">Kami mulai dengan bertanya-tanya "mau bikin apa?" dan Krysna mencoba coret-coret sketsa tampilan di kertas atau Figma.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Arsitektur Komponen</h4>
                <p className="text-slate-600 dark:text-slate-400">Dekrisna mencoba menyusun struktur kode dan komponen dasar, sambil belajar memahami TypeScript dan Next.js lebih dalam.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Integrasi & Polesan</h4>
                <p className="text-slate-600 dark:text-slate-400">Kami gabungkan desain dan kode sambil saling bantu, debug bareng, dan sesekali bertanya ke Google atau AI ketika mentok.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Architecture */}
      <section>
        <div className="flex items-center mb-8">
          <Layers className="text-blue-500 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Tumpukan Teknologi & Arsitektur</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <Code2 className="text-slate-400 mb-4" size={28} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mengapa Next.js?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Next.js dipilih karena direkomendasikan di tutorial yang kami ikuti dan cocok untuk belajar konsep modern web development. Lumayan susah di awal, tapi mulai terbiasa setelah sering coba-coba.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <Code2 className="text-slate-400 mb-4" size={28} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Konsep App Router</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              App Router masih cukup membingungkan buat kami, tapi kami belajar pelan-pelan. Proses belajar ini sendiri yang jadi nilai terbesar dari proyek ini.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
