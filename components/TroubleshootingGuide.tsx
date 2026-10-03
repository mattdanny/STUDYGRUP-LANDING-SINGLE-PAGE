'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/linksData';
import { ShieldAlert, HelpCircle, ChevronDown, Wifi, Smartphone, Globe2, CheckCircle2 } from 'lucide-react';

export default function TroubleshootingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="panduan" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Troubleshooting Cards */}
      <div className="mb-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-semibold mb-2">
            <Wifi className="w-3.5 h-3.5 text-cyan-400" />
            Solusi Kendala Akses Jaringan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Panduan Mengatasi Link Terblokir WiFi Kampus / ISP
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Jika link tidak dapat terbuka akibat pemblokiran DNS provider lokal, ikuti langkah mudah berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400 font-bold text-sm">
              1
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              Ganti ke Mirror Cloudflare
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Domain mirror <strong>sgm-direct.pages.dev</strong> menggunakan jalur Anycast Edge global yang kebal dari filter DNS lokal ISP Indonesia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 font-bold text-sm">
              2
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-400" />
              Aktifkan DNS Pribadi Ponsel
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Buka <strong>Pengaturan Ponsel &gt; Jaringan &amp; Internet &gt; DNS Pribadi</strong>, lalu isi dengan hostname:{' '}
              <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 font-mono">
                one.one.one.one
              </code>{' '}
              atau{' '}
              <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 font-mono">
                dns.google
              </code>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 font-bold text-sm">
              3
            </div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-indigo-400" />
              Verifikasi Keaslian Domain
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pastikan selalu mengakses link yang terdaftar pada portal resmi ini. Jangan pernah memasukkan sandi akun pada domain di luar daftar resmi kami.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="mt-16 pt-10 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Tanya Jawab Seputar Portal
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
