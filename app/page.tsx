import SLogo from '@/components/SLogo';

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-3 sm:p-6 md:p-10 bg-gradient-to-br from-slate-100 via-rose-50/30 to-slate-200/90 font-sans overflow-x-hidden">
      {/* Subtle ambient lighting orbs to make the glass effect visible */}
      <div
        className="absolute top-12 left-1/4 w-80 h-80 rounded-full bg-red-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 right-1/4 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-300/10 blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Aesthetic Glassmorphic Card */}
      <div className="w-full max-w-4xl backdrop-blur-2xl bg-white/80 sm:bg-white/85 rounded-3xl border border-white/90 shadow-[0_16px_50px_rgba(0,0,0,0.06)] p-5 sm:p-8 md:p-12 text-center flex flex-col items-center transition-all">
        {/* Top Horizontal Line */}
        <div className="w-full mb-6 sm:mb-8">
          <hr className="border-t border-slate-300/90 w-full" />
        </div>

        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1f2937] tracking-normal">
          INFO UPDATE LINK TERBARU WEBSITE STUDYGRUPMAHASISWA
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4b5563] max-w-2xl leading-relaxed">
          Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website Apps STUDYGRUPMAHASISWA
        </p>

        {/* Direct Link Section */}
        <p className="mt-6 text-sm sm:text-base text-[#4b5563]">
          Silahkan klik link dibawah ini
        </p>
        <p className="mt-2 text-base sm:text-lg">
          <a
            href="https://studygrupmahasiswaa.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] hover:text-[#0000aa] underline font-medium break-all transition-colors"
          >
            https://studygrupmahasiswaa.my.id
          </a>
        </p>

        {/* WhatsApp Channel Section */}
        <p className="mt-6 text-sm sm:text-base text-[#4b5563]">
          Join Whatsapp Channel :
        </p>
        <p className="mt-2 text-base sm:text-lg">
          <a
            href="https://msha.ke/studygrupmahasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] hover:text-[#0000aa] underline font-medium break-all transition-colors"
          >
            https://msha.ke/studygrupmahasiswa
          </a>
        </p>

        {/* Notice 1 */}
        <p className="mt-8 text-sm sm:text-base text-[#4b5563] font-medium">
          Apa yang sudah tertakar tidak akan tertukar ^^
        </p>

        {/* Notice 2 */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4b5563] font-mono tracking-wide">
          we are born to be a star &lt;/&gt;
        </p>

        {/* Bottom Horizontal Line */}
        <div className="w-full mt-8 sm:mt-10 mb-6 sm:mb-8">
          <hr className="border-t border-slate-300/90 w-full" />
        </div>

        {/* S Logo Watermark below the line */}
        <div className="flex justify-center items-center py-2">
          <SLogo className="w-16 h-22 sm:w-20 sm:h-28" />
        </div>
      </div>
    </main>
  );
}
