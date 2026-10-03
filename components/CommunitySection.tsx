'use client';

import React from 'react';
import { CommunityGroup } from '@/types';
import { Users, MessageCircle, Send, Hash, ArrowUpRight, QrCode, BookMarked } from 'lucide-react';

interface CommunitySectionProps {
  groups: CommunityGroup[];
  onOpenQr: (title: string, url: string) => void;
}

export default function CommunitySection({ groups, onOpenQr }: CommunitySectionProps) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      case 'telegram':
        return <Send className="w-5 h-5 text-sky-400" />;
      case 'discord':
        return <Hash className="w-5 h-5 text-indigo-400" />;
      default:
        return <Users className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'whatsapp':
        return 'border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20';
      case 'telegram':
        return 'border-sky-500/30 hover:border-sky-500/60 bg-sky-950/20';
      case 'discord':
        return 'border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-950/20';
      default:
        return 'border-slate-800 bg-slate-900/50';
    }
  };

  return (
    <section id="komunitas" className="py-12 sm:py-16 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            Jejaring Komunitas Mahasiswa Seluruh Indonesia
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Grup Belajar &amp; Ruang Diskusi Mahasiswa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Bergabunglah dengan ribuan mahasiswa dari berbagai perguruan tinggi negeri &amp; swasta untuk bertukar catatan kuliah, latihan soal ujian, diskusi skripsi, dan belajar bareng via Pomodoro 24/7.
          </p>
        </div>

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${getPlatformColor(
                group.platform
              )}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow">
                    {getIcon(group.platform)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-slate-800/90 text-slate-300 border border-slate-700">
                    {group.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {group.name}
                </h3>

                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-3">
                  <BookMarked className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="line-clamp-2">{group.topic}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs mb-4">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Anggota</span>
                    <span className="font-bold text-white">
                      {group.members} {group.maxMembers ? `/ ${group.maxMembers}` : ''}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block text-[10px]">Aktivitas</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      {group.activeNow}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5 transition-all hover:border-slate-600 shadow"
                >
                  <span>Gabung Sekarang</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenQr(group.name, group.link)}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white transition-colors"
                  title="Tampilkan QR Code"
                >
                  <QrCode className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
