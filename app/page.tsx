import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              الإصدار الكلاسيكي يعود من جديد
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-tight">
              استكشف عالم <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                PlayStation 3
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              حمل أفضل ألعاب PS3 بصيغة ISO و PowerISO. جودة عالية، روابط مباشرة، وتجربة مستخدم لا مثيل لها.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
                تصفح المكتبة
              </Link>
              <Link href="/about" className="bg-[#1e293b] text-white border border-slate-700 hover:bg-slate-800 font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1">
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-slate-700 bg-[#1e293b]">
          <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">500+</p>
              <p className="text-slate-400 font-medium text-sm">لعبة متاحة</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">1M+</p>
              <p className="text-slate-400 font-medium text-sm">عملية تحميل</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">50K+</p>
              <p className="text-slate-400 font-medium text-sm">مستخدم نشط</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white mb-2">100%</p>
              <p className="text-slate-400 font-medium text-sm">روابط آمنة</p>
            </div>
          </div>
        </section>

        {/* Latest Games */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">أحدث الإضافات</h2>
              <p className="text-slate-400">أحدث الألعاب التي تمت إضافتها للمكتبة</p>
            </div>
            <Link href="/games" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 bg-blue-500/10 py-2 px-4 rounded-lg">
              عرض الكل
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}