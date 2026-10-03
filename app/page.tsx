export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#333333] flex flex-col font-sans">
      {/* Top Divider Line */}
      <div className="w-full px-4 sm:px-6 pt-4">
        <hr className="border-t border-[#d1d5db] w-full" />
      </div>

      {/* Main Centered Content */}
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center flex flex-col items-center">
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#222222] tracking-normal">
          INFO UPDATE LINK TERBARU WEBSITE OPPADRAMA
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#444444]">
          Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website OPPADRAMA
        </p>

        {/* Direct Link Section */}
        <p className="mt-6 text-sm sm:text-base text-[#444444]">
          Silahkan klik link dibawah ini
        </p>
        <p className="mt-2 text-base sm:text-lg">
          <a
            href="http://212.86.121.175"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] hover:text-[#0000aa] underline"
          >
            http://212.86.121.175
          </a>
        </p>

        {/* Alternate Link Section */}
        <p className="mt-6 text-sm sm:text-base text-[#444444]">
          Link alternatif OPPADRAMA lainnya (bookmark untuk fitur auto redirect)
        </p>
        <p className="mt-2 text-base sm:text-lg">
          <a
            href="https://oppa.biz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] hover:text-[#0000aa] underline"
          >
            https://oppa.biz
          </a>
        </p>

        {/* Telegram Section */}
        <p className="mt-6 text-sm sm:text-base text-[#444444]">
          Join Telegram Group :
        </p>
        <p className="mt-2 text-base sm:text-lg">
          <a
            href="https://t.me/oppabiz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] hover:text-[#0000aa] underline"
          >
            https://t.me/oppabiz
          </a>
        </p>

        {/* Notice 1 */}
        <p className="mt-8 text-sm sm:text-base text-[#444444]">
          Hapus Cache atau Refresh Browser Kamu Jika Masih Nyasar Ke alamat Lama ^_^
        </p>

        {/* Notice 2 */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-[#444444] leading-relaxed max-w-3xl">
          Dan apabila masih tetap tidak bisa akses, dicoba menggunakan VPN, setelah bisa di akses silahkan matikan kembali VPN nya.
        </p>
      </div>

      {/* Bottom Divider Line */}
      <div className="w-full px-4 sm:px-6 pb-24">
        <hr className="border-t border-[#d1d5db] w-full" />
      </div>
    </main>
  );
}
