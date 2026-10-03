import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFO UPDATE LINK TERBARU WEBSITE OPPADRAMA - STUDYGRUPMAHASISWA INFO",
  description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website OPPADRAMA - Info Update Link Terbaru Website Apps STUDYGRUPMAHASISWA",
  openGraph: {
    title: "INFO UPDATE LINK TERBARU WEBSITE OPPADRAMA",
    description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website OPPADRAMA",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "INFO UPDATE LINK TERBARU WEBSITE OPPADRAMA",
    description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website OPPADRAMA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-[#333333] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
