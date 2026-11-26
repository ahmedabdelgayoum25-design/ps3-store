import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              مكتبة ألعاب <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">PlayStation 3</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              وجهتك الأولى لتحميل أفضل ألعاب PS3 بصيغة ISO و PowerISO. جودة عالية، روابط مباشرة، وتجربة مستخدم لا مثيل لها.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1">
                تصفح كل الألعاب
              </Link>
              <Link href="/about" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:-translate-y-1">
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section (جديد) */}
        <section className="border-y border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-1">500+</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">لعبة متاحة</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-1">1M+</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">عملية تحميل</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-1">50K+</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">مستخدم نشط</p>
            </div>
            <div>
              <p className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-1">100%</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">روابط آمنة</p>
            </div>
          </div>
        </section>

        {/* Latest Games Section */}
        <section className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full inline-block"></span>
              أحدث الألعاب المضافة
            </h2>
            <Link href="/games" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1">
              عرض الكل <span>&larr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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