import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50 text-[#333333] font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-slate-600">Halaman tidak ditemukan.</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 underline">
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
