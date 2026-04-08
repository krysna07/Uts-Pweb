"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-full mb-6">
        <AlertTriangle className="text-red-500 w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
        Terjadi Kesalahan!
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
        Mohon maaf atas ketidaknyamanannya. Terjadi kesalahan tak terduga saat memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-full font-semibold transition-colors shadow-sm"
      >
        <RefreshCcw size={18} className="mr-2" /> Coba Lagi
      </button>
    </div>
  );
}
