'use client';

import React from 'react';
import Image from 'next/image';
import { X, Copy, Check, ExternalLink, QrCode } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export default function QrModal({ isOpen, onClose, title, url }: QrModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    url
  )}&bgcolor=ffffff&color=0f172a&margin=10`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 text-center shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-700/50 text-cyan-300 text-xs font-semibold mb-3">
          <QrCode className="w-3.5 h-3.5" />
          <span>Pindai QR Code Ponsel</span>
        </div>

        <h3 className="text-base font-bold text-white mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-slate-400 mb-4">
          Arahkan kamera smartphone untuk langsung membuka tautan ini.
        </p>

        {/* QR Code Container */}
        <div className="p-3 bg-white rounded-2xl inline-block shadow-inner mx-auto mb-4">
          <Image
            src={qrImageUrl}
            alt={`QR Code untuk ${title}`}
            width={240}
            height={240}
            className="rounded-lg"
            unoptimized
          />
        </div>

        {/* URL Box */}
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 truncate mb-4">
          {url}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopy}
            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin URL</span>
              </>
            )}
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Kunjungi</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
