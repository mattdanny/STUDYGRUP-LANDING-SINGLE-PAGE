import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFO UPDATE LINK TERBARU WEBSITE STUDYGRUPMAHASISWA",
  description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website Apps STUDYGRUPMAHASISWA",
  openGraph: {
    title: "INFO UPDATE LINK TERBARU WEBSITE STUDYGRUPMAHASISWA",
    description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website Apps STUDYGRUPMAHASISWA",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "INFO UPDATE LINK TERBARU WEBSITE STUDYGRUPMAHASISWA",
    description: "Halaman Ini Hanya Digunakan Sebagai Info Live Update Alamat Website Apps STUDYGRUPMAHASISWA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var currentFetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() {
                      return currentFetch;
                    },
                    set: function(newFetch) {
                      currentFetch = newFetch;
                    },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-slate-50 text-[#333333] min-h-screen antialiased selection:bg-red-500/20 selection:text-red-700"
      >
        {children}
      </body>
    </html>
  );
}
