'use client';

import React from 'react';
import { ShieldCheck, Zap, Globe, Users, ArrowUpRight, Search, RefreshCw, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onRunSpeedTest: () => void;
  isTestingSpeed: boolean;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  onRunSpeedTest,
  isTestingSpeed,
  selectedCategory,
  setSelectedCategory,
}: HeroSectionProps) {
  const categories = [
    { id: 'all', label: 'Semua Tautan' },
    { id: 'portal', label: 'Domain Utama' },
    { id: 'mirror', label: 'Mirror Cloud' },
    { id: 'app', label: 'Web & Mobile Apps' },
    { id: 'tool', label: 'Bot & E-Library' },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-cyan-300">Pusat Update Resmi</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Terverifikasi & Aman dari Phishing</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Akses Aman & Tercepat Web Apps{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            STUDYGRUPMAHASISWA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Temukan link resmi, jalur mirror berkecepatan tinggi, grup diskusi kuliah, serta aplikasi belajar
          tanpa kendala blokir DNS provider atau WiFi kampus.
        </p>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8 p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm">
          <div className="p-2 sm:p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-xl sm:text-2xl font-black text-cyan-400">26.800+</div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1">
              <Users className="w-3 h-3 text-cyan-400" /> Mahasiswa Aktif
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Status Server
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-xl sm:text-2xl font-black text-blue-400">5 Node</div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1">
              <Globe className="w-3 h-3 text-blue-400" /> Mirror Siaga
            </div>
          </div>
          <div className="p-2 sm:p-3 text-center">
            <div className="text-xl sm:text-2xl font-black text-amber-400">&lt;25ms</div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center justify-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Rata Latency
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://studygrupmahasiswa.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Buka Web App Utama</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={onRunSpeedTest}
            disabled={isTestingSpeed}
            className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 flex items-center gap-2 transition-all hover:border-slate-500 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-cyan-400 ${isTestingSpeed ? 'animate-spin' : ''}`} />
            <span>{isTestingSpeed ? 'Mengukur Ping Jaringan...' : 'Tes Latensi Server'}</span>
          </button>

          <a
            href="#komunitas"
            className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-2 transition-all"
          >
            <span>Gabung WhatsApp / Discord</span>
          </a>
        </div>

        {/* Quick Search & Filter Toolbar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari domain, mirror Cloudflare, bot jurnal, grup WhatsApp..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-sm shadow-xl transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
