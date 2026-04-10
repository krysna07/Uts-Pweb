import { Users, Workflow, Code2, Layers } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Tim K&D",
};

export default function About() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
          Tentang Kami
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
        <div className="space-y-12">

  {/* Krysna */}
  <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
    <img
      src="foto krysna.jpeg"
      alt="Krysna"
      className="w-40 h-40 object-cover rounded-xl"
    />

    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Krysna
      </h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
        Lead UI/UX & Desain
      </p>
      <p className="text-slate-600 dark:text-slate-400">
        Masih dalam tahap belajar mendesain tampilan website yang menarik dan mudah digunakan.
        Krysna mencoba memahami cara membuat antarmuka yang nyaman dengan bantuan Figma dan
        Tailwind CSS, meskipun hasilnya masih terus diperbaiki.
      </p>
    </div>
  </div>

  {/* Dekrisna */}
  <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
    <img
      src="foto dekrisna.jpeg"
      alt="Dekrisna"
      className="w-40 h-40 object-cover rounded-xl" />
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Dekrisna
      </h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
        Lead Web Design
      </p>
      <p className="text-slate-600 dark:text-slate-400">
        Saya adalah seorang pemula di bidang web design yang tertarik membuat tampilan website
        yang menarik, rapi, dan user-friendly. Untuk meningkatkan kemampuan, saya aktif
        mengerjakan berbagai project, terutama di bagian frontend dan desain layout.
      </p>
    </div>
  </div>
</div>
      </section>
    </div>
  );
}
