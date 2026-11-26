import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. إخبار Next.js بكل الروابط الثابتة مسبقاً (مطلوب مع Cache Components)
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

// 2. فصل المحتوى الذي يقرأ params في مكون منفصل
async function GameDetailsContent({ params }: { params: Promise<{ slug: string }> }) {
  // 3. انتظار الـ params داخل هذا المكون (سيتم تغليفه بـ Suspense لاحقاً)
  const resolvedParams = await params;
  const game = games.find((g) => g.slug === resolvedParams.slug);
  
  if (!game) notFound();

  const sudanLink = `https://wa.me/${game.sudanPhone.replace(/\D/g, '')}?text=مرحباً، أريد طلب لعبة ${game.title}`;
  const rwandaLink = `https://wa.me/${game.rwandaPhone.replace(/\D/g, '')}?text=مرحباً، أريد طلب لعبة ${game.title}`;

  return (
    <main className="flex-grow container mx-auto px-6 py-28 relative z-10">
      <Link href="/games" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 font-semibold transition-colors">
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        العودة للمكتبة
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 bg-[#111111] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="lg:w-1/3 w-full max-w-sm mx-auto relative z-10">
          <img src={game.cover} alt={game.title} className="w-full rounded-2xl shadow-2xl border border-gray-700" />
        </div>

        <div className="lg:w-2/3 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{game.title}</h1>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-sm shadow-md">⭐ {game.rating}</span>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{game.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center border border-gray-800">
              <span className="block text-gray-500 text-sm mb-1">الحجم</span>
              <span className="font-bold text-xl text-white">{game.size}</span>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center border border-gray-800">
              <span className="block text-gray-500 text-sm mb-1">الصيغة</span>
              <span className="font-bold text-xl text-white">ISO</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">اطلب اللعبة الآن:</h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={sudanLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-green-900/30 hover:-translate-y-1">
                <span>اطلب عبر رقم السودان</span>
                <span className="text-2xl">🇸🇩</span>
              </a>

              <a href={rwandaLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-1">
                <span>اطلب عبر رقم رواندا</span>
                <span className="text-2xl">🇷🇼</span>
              </a>
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-4">سيتم تحويلك إلى الواتساب لإتمام عملية الطلب ودفع السعر ({game.price}).</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white border-r-4 border-blue-600 pr-4">صور من داخل اللعبة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.screenshots.map((img, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group shadow-lg">
              <img src={img} alt={`صورة ${index + 1}`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// 4. المكون الرئيسي (Page) يغلف المحتوى الديناميكي بـ Suspense
export default function GameDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center text-white text-xl">جارٍ تحميل اللعبة...</div>}>
        <GameDetailsContent params={params} />
      </Suspense>
      <Footer />
    </div>
  );
}