'use client';

import React, { useState } from 'react';
import { X, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [provider, setProvider] = useState('WiFi Kampus (Eduroam / Lokal)');
  const [targetLink, setTargetLink] = useState('Portal Utama (studygrupmahasiswa.org)');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
          <AlertTriangle className="w-4 h-4" />
          Lapor Link Terblokir / Request Mirror
        </div>

        <h3 className="text-lg font-bold text-white mb-1">
          Bantuan Akses Mahasiswa
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          Tim teknis kami akan segera memverifikasi dan merilis node mirror alternatif dalam waktu &lt;15 menit.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <div className="text-base font-bold text-white">Laporan Berhasil Terkirim!</div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Terima kasih telah berkontribusi. Tim kami sedang mengalihkan routing traffic untuk provider Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Penyedia Jaringan / ISP:
              </label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <option>WiFi Kampus (Eduroam / Lokal)</option>
                <option>Telkomsel / By.U</option>
                <option>IndiHome</option>
                <option>Biznet</option>
                <option>MyRepublic</option>
                <option>XL Axiata / AXIS</option>
                <option>Indosat Ooredoo Hutchison (Tri / IM3)</option>
                <option>Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Link atau Layanan Bermasalah:
              </label>
              <select
                value={targetLink}
                onChange={(e) => setTargetLink(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <option>Portal Utama (studygrupmahasiswa.org)</option>
                <option>Mirror Cloudflare Edge Direct</option>
                <option>Mirror Server Indonesia (IDC)</option>
                <option>SGM Web Apps PWA</option>
                <option>Unduhan APK Android</option>
                <option>Link WhatsApp Penuh / Error</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Catatan Kendala (Opsional):
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Contoh: DNS error saat buka di jaringan WiFi kampus UNPAD/UI/ITB/UGM..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Kirim Laporan Cepat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
