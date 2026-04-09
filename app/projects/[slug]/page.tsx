import { notFound } from "next/navigation";
import Link from "next/link";
import projectsData from "../../../data/projects.json";
import { ArrowLeft, Target, CheckCircle2, Code2, Users } from "lucide-react";
import ProjectPreview from "@/components/ProjectPreview";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 mb-8 transition-colors font-medium"
      >
        <ArrowLeft size={18} className="mr-2" /> Kembali ke Proyek
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          {project.title}
        </h1>

        <ProjectPreview
          title={project.title}
          image={project.image}
          liveUrl={project.liveUrl}
          variant="detail"
          priority
          preview={project.preview}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          {/* Deskripsi */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Gambaran Umum</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Core Info */}
          <section className="grid sm:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tujuan Project</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.tujuan}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Solusi Masalah</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.masalah}</p>
            </div>
          </section>

          {/* Kontribusi Tim */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-blue-500" size={28} />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Kontribusi Tim</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Krysna <span className="text-sm font-normal text-slate-500">(UI/UX)</span></h4>
                <p className="text-slate-600 dark:text-slate-400">{project.kontribusi.Krysna}</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dekrisna <span className="text-sm font-normal text-slate-500">(Logic)</span></h4>
                <p className="text-slate-600 dark:text-slate-400">{project.kontribusi.Dekrisna}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-blue-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Teknologi</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.teknologi.map((tech) => (
                <span key={tech} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 w-full text-center shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
