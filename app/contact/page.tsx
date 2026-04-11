"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Hubungi Tim Kami
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Tertarik untuk berkolaborasi? Mari bangun sesuatu yang luar biasa bersama.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
        {formData.name && (
          <div className="absolute top-0 left-0 w-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-center py-2 text-sm font-medium animate-in slide-in-from-top-full duration-300">
            Halo, {formData.name}! Kami tidak sabar menunggu pesan Anda.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <User size={16} /> Nama
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Budi Santoso"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <MessageSquare size={16} /> Pesan
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              placeholder="Ceritakan tentang proyek Anda..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {status === "idle" && (
              <>
                Kirim Pesan <Send size={18} />
              </>
            )}
            {status === "submitting" && "Mengirim..."}
            {status === "success" && "Pesan Terkirim!"}
          </button>

          {status === "success" && (
            <p className="text-emerald-600 dark:text-emerald-400 text-center font-medium mt-4 animate-in fade-in zoom-in duration-300">
              Terima kasih! Kami akan segera menghubungi Anda.
            </p>
          )}
        </form>
        
      </div>
    </div>
  );
}
