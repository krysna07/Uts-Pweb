import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    image: string;
    category: string;
    liveUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border border-slate-100 dark:border-slate-800 flex flex-col">
      <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200 capitalize shadow-sm">
          {({ environment: "Lingkungan", business: "Bisnis", web: "Web" } as Record<string, string>)[project.category] ?? project.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Lihat Live
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Lihat Detail <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
