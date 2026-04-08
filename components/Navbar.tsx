"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { Code2 } from "lucide-react";

const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Proyek", href: "/projects" },
  { name: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="text-blue-600 dark:text-blue-400" />
            <Link href="/" className="font-bold text-xl tracking-tight">
              K&D<span className="text-blue-600 dark:text-blue-400">Team</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              );
            })}
            <DarkModeToggle />
          </div>

          {/* Mobile menu could be added here, keeping it simple for now or adding basic flex */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            {/* simple links for mobile */}
             <div className="flex space-x-3 text-sm">
                <Link href="/projects" className="text-slate-600 dark:text-slate-400">Proyek</Link>
                <Link href="/about" className="text-slate-600 dark:text-slate-400">Tentang</Link>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
