'use client';

import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, RefreshCw, MessageSquareQuote } from 'lucide-react';

export default function AiAssistantSection() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Halo Mahasiswa! Saya Asisten Belajar STUDYGRUPMAHASISWA. Tanyakan apa saja seputar akses link mirror, rekomendasi grup WhatsApp/Discord, materi kuliah, atau tips manajemen belajar kampus.',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const samplePrompts = [
    'Bagaimana cara mengatasi domain link terblokir di WiFi kampus?',
    'Rekomendasi grup belajar untuk mahasiswa tugas akhir/skripsi',
    'Tips manajemen waktu belajar dengan teknik Pomodoro',
    'Cara verifikasi link resmi agar terhindar dari phishing',
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || prompt;
    if (!query.trim() || loading) return;

    const userMsg = query.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    if (!textToSend) setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg }),
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: data.error || 'Maaf, terjadi kendala saat memproses jawaban. Silakan coba kembali.',
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: 'Gagal terhubung ke layanan AI. Pastikan koneksi internet stabil.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Decorative background badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Asisten AI Cerdas STUDYGRUP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tanya Asisten Akademik &amp; Panduan Komunitas
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Konsultasikan kendala link mirror, tips skripsi, pembagian materi, atau panduan bergabung ke grup kampus.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-400/90 font-mono bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-700/30 self-start md:self-auto">
            <span>Model: Gemini AI Active</span>
          </div>
        </div>

        {/* Quick Sample Prompts */}
        <div className="mb-4">
          <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-2 font-medium">
            <MessageSquareQuote className="w-3.5 h-3.5 text-slate-500" />
            Contoh pertanyaan cepat:
          </div>
          <div className="flex flex-wrap gap-2">
            {samplePrompts.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(sample)}
                disabled={loading}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-all text-left disabled:opacity-50"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Log Window */}
        <div className="h-72 sm:h-80 overflow-y-auto space-y-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-sm font-sans mb-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 leading-relaxed text-xs sm:text-sm whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs italic">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
              <span>Menyiapkan jawaban untuk Anda...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ketik pertanyaan seputar link, cara gabung grup, atau tips kuliah..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            <span>Kirim</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
