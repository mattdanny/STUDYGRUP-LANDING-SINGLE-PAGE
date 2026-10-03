'use client';

import React, { useState } from 'react';
import { LinkItem } from '@/types';
import {
  Globe,
  ExternalLink,
  Copy,
  Check,
  QrCode,
  Zap,
  Server,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

interface LinkMirrorSectionProps {
  links: LinkItem[];
  onOpenQr: (title: string, url: string) => void;
  testedLatencies: Record<string, number>;
}

export default function LinkMirrorSection({
  links,
  onOpenQr,
  testedLatencies,
}: LinkMirrorSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="links" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
            <Server className="w-3.5 h-3.5" />
            Node Jaringan & Mirror Aktif
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Daftar Link Resmi & Alternatif Terkini
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Jika domain utama Anda mengalami loading lambat atau terhalang firewall kampus, gunakan salah satu link mirror di bawah ini.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Auto-Check Status: <strong>Semua Operasional</strong></span>
        </div>
      </div>

      {/* Grid of Link Cards */}
      {links.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
          <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          <p className="text-slate-300 font-medium">Tidak ada link yang cocok dengan kata kunci.</p>
          <p className="text-slate-500 text-xs mt-1">Coba gunakan kata kunci lain seperti &quot;mirror&quot;, &quot;apps&quot;, atau &quot;cloudflare&quot;.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((item) => {
            const currentLatency = testedLatencies[item.id] ?? item.latencyMs;

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 border ${
                  item.isRecommended
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-cyan-500/40 shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {/* Card Top Pill */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${
                        item.isRecommended
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {item.isRecommended && <Sparkles className="w-3 h-3 text-cyan-400" />}
                      {item.badge}
                    </span>

                    {/* Latency Meter */}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                      <Zap
                        className={`w-3 h-3 ${
                          currentLatency < 25
                            ? 'text-emerald-400'
                            : currentLatency < 45
                            ? 'text-amber-400'
                            : 'text-blue-400'
                        }`}
                      />
                      <span
                        className={
                          currentLatency < 25
                            ? 'text-emerald-400'
                            : currentLatency < 45
                            ? 'text-amber-400'
                            : 'text-blue-400'
                        }
                      >
                        {currentLatency}ms
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Server Location Meta */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Globe className="w-3 h-3 text-slate-500" />
                    <span>Lokasi: {item.serverLocation}</span>
                  </div>

                  {/* Display URL Box */}
                  <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-300 truncate">
                    <span className="truncate pr-2">{item.url}</span>
                    <span className="text-[10px] text-emerald-400 font-sans uppercase font-bold shrink-0">
                      HTTPS
                    </span>
                  </div>
                </div>

                {/* Actions Bottom Bar */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      item.isRecommended
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold shadow-md shadow-cyan-500/20'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    <span>Kunjungi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy(item.id, item.url)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/80 hover:text-white transition-colors relative"
                    title="Salin Link"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => onOpenQr(item.title, item.url)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/80 hover:text-white transition-colors"
                    title="Buka QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
