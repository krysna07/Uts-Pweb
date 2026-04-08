export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Tim Krysna & Dekrisna. Hak cipta dilindungi.
        </p>
        <div className="flex space-x-4 text-sm text-slate-500 dark:text-slate-400">
          <span>Next.js 14</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
