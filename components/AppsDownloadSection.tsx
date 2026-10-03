'use client';

import React, { useState } from 'react';
import { Smartphone, Laptop, Download, ShieldCheck, Cpu, Bell, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AppsDownloadSection() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3500);
  };

  return (
    <section id="apps" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              Apps Ekosistem Mahasiswa
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Unduh Aplikasi Resmi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                STUDYGRUPMAHASISWA
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dapatkan pengalaman belajar tanpa hambatan. Aplikasi resmi kami telah dilengkapi teknologi <strong>Auto-Switch Mirror</strong> cerdas yang otomatis menghubungkan perangkat Anda ke server mirror aktif tercepat bila terjadi pemblokiran domain oleh jaringan lokal.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Teknologi DNS Anti-Blokir Bawaan</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Notifikasi Jadwal &amp; Tugas Kuliah</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hemat Kuota Internet (Hanya 8.4 MB)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Akses Offline Materi &amp; Catatan</span>
              </div>
            </div>

            {/* Download CTA buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>{downloadStarted ? 'Mengunduh APK v3.2.0...' : 'Unduh APK Android (8.4 MB)'}</span>
              </button>

              <a
                href="https://apps.studygrupmahasiswa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
              >
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Buka Web App PWA</span>
              </a>
            </div>

            {downloadStarted && (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>File APK resmi STUDYGRUP v3.2.0 sedang disiapkan dari mirror terdekat. Periksa notifikasi download browser Anda.</span>
              </div>
            )}
          </div>

          {/* Right Phone Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">SGM App System</span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono">v3.2.0 (Build 2026)</span>
              </div>

              <div className="py-4 space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Active Gateway</div>
                  <div className="text-xs font-mono text-emerald-400 font-bold mt-0.5">Cloudflare Anycast IP: 172.67.x.x</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">DNS Crypt Guard</div>
                    <div className="text-[11px] text-slate-400">Proteksi Anti Blokir Kampus</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    AKTIF
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Auto-Sync Forum</div>
                    <div className="text-[11px] text-slate-400">Sinkronisasi pesan tugas &amp; e-book</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    READY
                  </span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-500">
                  SHA-256 Checksum: 8f4a2...9d10e (100% Signed &amp; Safe)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
