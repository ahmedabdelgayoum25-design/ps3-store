import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Ps3 Store | متجر ألعاب البلايستيشن",
  description: "وجهتك الأولى لتحميل أفضل ألعاب PS3 بصيغة ISO و PowerISO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-[#0f172a] text-slate-200 min-h-screen antialiased selection:bg-blue-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}