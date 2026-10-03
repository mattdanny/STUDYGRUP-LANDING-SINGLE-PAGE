import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Pertanyaan atau prompt tidak boleh kosong' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const systemInstruction = `Kamu adalah Asisten Belajar & Panduan STUDYGRUPMAHASISWA INFO (portal update link resmi dan komunitas belajar mahasiswa Indonesia). 
Berikan jawaban yang ramah, ringkas, solutif, edukatif, dan menyemangati mahasiswa dalam bahasa Indonesia yang baik dan santai khas kampus. 
Bantu mahasiswa mengenai tips belajar, skripsi, manajemen waktu, pembagian kelompok belajar, atau panduan penggunaan link/app STUDYGRUPMAHASISWA.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            systemInstruction,
            temperature: 0.7,
            maxOutputTokens: 600,
          },
        });

        const reply = response.text || 'Maaf, tidak ada respon yang dihasilkan.';
        return NextResponse.json({ reply });
      } catch (genAiError) {
        console.warn('Gemini API call failed, using intelligent fallback:', genAiError);
      }
    }

    // Intelligent Fallback when GEMINI_API_KEY is not configured
    const lower = prompt.toLowerCase();
    let reply = '';

    if (lower.includes('link') || lower.includes('mirror') || lower.includes('blokir') || lower.includes('akses')) {
      reply = `Halo Mahasiswa! Untuk kendala akses link atau link terblokir oleh provider/WiFi kampus:\n1. Gunakan link mirror aktif (Mirror Cloudflare atau Mirror Alternatif ID pada daftar di atas).\n2. Aktifkan DNS 1.1.1.1 (Cloudflare WARP) atau Google DNS 8.8.8.8 di pengaturan perangkat.\n3. Unduh Aplikasi SGM Apps Android yang sudah dilengkapi fitur Auto-Switch DNS anti-blokir!`;
    } else if (lower.includes('skripsi') || lower.includes('tugas') || lower.includes('jurnal')) {
      reply = `Semangat perjuangan tugas kuliah & skripsinya! Rekomendasi dari Komunitas STUDYGRUP:\n1. Masuk ke WhatsApp Study Lounge #Soshum atau #Saintek sesuai rumpun ilmumu untuk sharing literatur & referensi.\n2. Cek Telegram Channel STUDYGRUP untuk kumpulan template jurnal dan modul metodologi penelitian gratis.\n3. Jangan sungkan ikut Voice Pomodoro di Discord tiap malam untuk nugas bareng tanpa distraksi!`;
    } else if (lower.includes('pomodoro') || lower.includes('fokus') || lower.includes('waktu') || lower.includes('jadwal')) {
      reply = `Teknik Belajar Efektif yang sering dipakai di Study Group:\n- Teknik Pomodoro: 25 menit fokus penuh, 5 menit istirahat sejenak, ulangi 4 siklus lalu istirahat panjang (20-30 menit).\n- Active Recall: Uji ingatanmu dengan membuat pertanyaan kuis mandiri setelah membaca modul.\n- Bergabung di Voice Study Room Discord Mahasiswa 24/7 kami untuk menjaga akuntabilitas belajar bareng teman-teman seluruh Indonesia!`;
    } else if (lower.includes('wa') || lower.includes('whatsapp') || lower.includes('telegram') || lower.includes('grup') || lower.includes('komunitas')) {
      reply = `Untuk bergabung ke Grup Belajar Mahasiswa:\n- Silakan pilih grup sesuai rumpun (Saintek, Soshum, Medis/Kesehatan, atau Pemrograman).\n- Klik tombol "Gabung Grup" atau klik "QR Code" untuk langsung scan via kamera WhatsApp ponselmu.\n- Pastikan patuhi norma kesopanan dan dilarang menyebarkan spam atau materi plagiarisme.`;
    } else {
      reply = `Terima kasih sudah berkonsultasi di STUDYGRUPMAHASISWA INFO!\n\nUntuk pertanyaan seputar "${prompt}":\nFokuslah pada konsistensi belajar, manfaatkan jejaring teman-teman di grup diskusi WhatsApp dan Discord kami untuk berdiskusi materi yang belum dipahami, dan pastikan selalu memakai Link Resmi / Mirror Terverifikasi yang tercantum di portal ini agar terhindar dari phishing.\n\nButuh bantuan link atau grup spesifik? Cek daftar link dan mirror di halaman utama!`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('AI Route error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem saat memproses pesan.' },
      { status: 500 }
    );
  }
}
