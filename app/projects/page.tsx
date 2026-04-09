"use client";

import { useState } from "react";
import projectsData from "../../data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Search } from "lucide-react";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Proyek Kami
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Jelajahi solusi digital yang telah kami bangun dan cari proyek yang ingin kamu lihat.
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari proyek..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
          Tidak ada proyek yang cocok dengan kriteria pencarian.
        </div>
      )}
    </div>
  );
}
