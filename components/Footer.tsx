export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
          © {new Date().getFullYear()} Krysna & Dekrisna. Hak cipta dilindungi.
        </p>

      </div>
    </footer>
  );
}