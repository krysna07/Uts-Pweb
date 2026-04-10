import { Users, GraduationCap, ArrowRight } from "lucide-react";
import TeamCard from "@/components/TeamCard"; 

export const metadata = {
  title: "Tentang Kami | Tim K&D",
};

export default function About() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
          Tentang Kami
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Kami dua mahasiswa yang lagi belajar bareng membuat website. Masih banyak yang belum kami kuasai, tapi kami percaya proses belajar yang jujur adalah langkah terbaik.
        </p>
      </div>

      {/* Team Division Section */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <Users className="text-blue-500 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Anggota Tim & Peran</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <TeamCard
            name="I Gusti Krysna DevaNanda"
            role="UI/UX & Desain"
            image="/foto%20krysna.jpeg"
            description="Masih belajar merancang tampilan yang nyaman dipakai. Suka ngulik desain dan mencoba membuat sesuatu yang enak dilihat, meskipun masih banyak yang perlu dipelajari."
            skills={["Figma", "Tailwind CSS", "HTML/CSS", "Canva"]}
          />
          <TeamCard
            name="Gede Krisna Chita Dharma Wacika"
            role="Web Design"
            image="/foto%20dekrisna.jpeg"
            description="Saya sedang belajar web design dan tertarik membuat tampilan website yang menarik dan mudah digunakan. Walaupun masih pemula, saya aktif mencoba berbagai project untuk meningkatkan skill, terutama di bagian tampilan (frontend) dan desain layout."
            skills={["Next.js", "JavaScript", "CSS", "HTML", "Pyhton"]}
          />
        </div>
      </section>

      {/* Education Section - Desain Card Konsisten */}
      <section className="mb-20">
        <div className="flex items-center mb-8">
          <GraduationCap className="text-blue-500 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Riwayat Pendidikan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Pendidikan Krysna */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
              I Gusti Krysna DevaNanda
            </h3>
            
            <div className="space-y-6">
              {/* SMA */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <div className="pb-2">
                  <p className="text-xs font-medium text-slate-500">2021 - 2024</p>
                  <h4 className="font-bold text-slate-900 dark:text-white">SMA Negeri 4 Denpasar</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Jurusan MIPA</p>
                </div>
              </div>

              {/* Universitas */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-500">2024 - Sekarang</p>
                  <h4 className="font-bold text-slate-900 dark:text-white">S1 Informatika</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">Primakara University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Pendidikan Dekrisna */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
              Gede Krisna Chita Dharma Wacika
            </h3>
            
            <div className="space-y-6">
              {/* SMA */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <div className="pb-2">
                  <p className="text-xs font-medium text-slate-500">2021 - 2024</p>
                  <h4 className="font-bold text-slate-900 dark:text-white">SMA Negeri 1 Pekutatan</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Jurusan MIPA</p>
                </div>
              </div>

              {/* Universitas */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-500">2024 - Sekarang</p>
                  <h4 className="font-bold text-slate-900 dark:text-white">S1 Informatika</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">Primakara University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}