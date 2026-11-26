import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Ps3 Store", // الاسم الجديد
  description: "وجهتك الأولى لتحميل أفضل ألعاب PS3 بصيغة ISO و PowerISO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {/* هنا نضع كلاس الثيم الذي اخترته. إذا اخترت الثيم الأول، ضع bg-gray-50 text-gray-900 */}
      <body className={`${cairo.className} bg-gray-950 text-white min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}