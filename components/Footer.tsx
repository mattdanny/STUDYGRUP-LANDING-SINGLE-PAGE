'use client';

import React from 'react';
import { BookOpen, ShieldCheck, Heart, Send, Globe, Github } from 'lucide-react';

interface FooterProps {
  onOpenReport: () => void;
}

export default function Footer({ onOpenReport }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          {/* Col 1 Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                STUDYGRUP<span className="text-cyan-400">MAHASISWA</span> INFO
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Portal informasi update tautan resmi, link alternatif mirror, dan komunitas belajar daring mahasiswa seluruh perguruan tinggi di Indonesia.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Semua link terdaftar diamankan dengan TLS 1.3 &amp; DNSSEC.</span>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider">
              Tautan Cepat
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#links" className="hover:text-cyan-400 transition-colors">
                  Mirror Tercepat
                </a>
              </li>
              <li>
                <a href="#komunitas" className="hover:text-cyan-400 transition-colors">
                  Grup WhatsApp &amp; Discord
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-cyan-400 transition-colors">
                  Unduh APK Android
                </a>
              </li>
              <li>
                <a href="#panduan" className="hover:text-cyan-400 transition-colors">
                  Panduan DNS Pribadi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Darurat & Bantuan */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider">
              Kontak Darurat
            </div>
            <p className="text-[11px] text-slate-400">
              Jika semua link tidak dapat diakses, periksa channel darurat kami:
            </p>
            <div className="space-y-1.5 pt-1">
              <a
                href="https://t.me/studygrupmahasiswa_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:underline text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram Emergency Broadcast</span>
              </a>
              <div>
                <button
                  onClick={onOpenReport}
                  className="text-cyan-400 hover:underline text-xs"
                >
                  Lapor Link Mengalami Gangguan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} STUDYGRUPMAHASISWA INFO. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat untuk mendukung edukasi &amp; kolaborasi belajar mahasiswa se-Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
