'use client';

import React, { useState } from 'react';
import { ShieldCheck, Activity, Menu, X, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenReport: () => void;
}

export default function Navbar({ onOpenReport }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  STUDYGRUP<span className="text-cyan-400">MAHASISWA</span>
                </span>
                <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                  INFO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Pusat Update Link Resmi & Web Apps Mahasiswa
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#links" className="hover:text-cyan-400 transition-colors">
              Link & Mirror
            </a>
            <a href="#komunitas" className="hover:text-cyan-400 transition-colors">
              Grup Belajar
            </a>
            <a href="#apps" className="hover:text-cyan-400 transition-colors">
              Aplikasi Resmi
            </a>
            <a href="#ai-assistant" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              AI Belajar
            </a>
            <a href="#panduan" className="hover:text-cyan-400 transition-colors">
              Panduan Akses
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Status Badge & Action */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-600/30 text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Semua Link Online</span>
            </div>

            <button
              onClick={onOpenReport}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:border-slate-600"
            >
              Lapor Kendala
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-emerald-400 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sistem Aktif & Terverifikasi
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReport();
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Lapor Link Terblokir
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a
              href="#links"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-200"
            >
              🔗 Link & Mirror
            </a>
            <a
              href="#komunitas"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-200"
            >
              👥 Grup Belajar
            </a>
            <a
              href="#apps"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-200"
            >
              📱 Aplikasi Resmi
            </a>
            <a
              href="#ai-assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-amber-300"
            >
              ✨ AI Asisten Belajar
            </a>
            <a
              href="#panduan"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-200"
            >
              🛡️ Panduan Akses
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-200"
            >
              ❓ FAQ Mahasiswa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
