import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function GameDetails({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  if (!game) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* خلفية اللعبة الضبابية (جديد) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none">
        <img src={game.cover} alt="bg" className="w-full h-full object-cover blur-[100px] scale-110" />
      </div>

      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        
        {/* زر العودة */}
        <Link href="/games" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 font-semibold">
          <span className="mr-2">&rarr;</span> العودة للمكتبة
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/20 dark:border-gray-800 shadow-2xl">
          <div className="lg:w-1/3 w-full max-w-sm mx-auto">
            <img src={game.cover} alt={game.title} className="w-full rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700" />
          </div>

          <div className="lg:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">{game.title}</h1>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-sm shadow-md">⭐ {game.rating}</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">{game.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">الحجم</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white">{game.size}</span>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                <span className="block text-gray-500 dark:text-gray-400 text-sm mb-1">الصيغة</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white">ISO</span>
              </div>
            </div>

            <a 
              href={game.downloadLink} 
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-xl py-4 rounded-xl transition-all shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-1"
            >
              ⬇️ تحميل اللعبة الآن
            </a>
          </div>
        </div>

        {/* معرض الصور */}
        <div className="mt-16 relative z-10">
          <h2 className="text-3xl font-bold mb-6 border-r-4 border-blue-600 pr-4 text-gray-900 dark:text-white">صور من داخل اللعبة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {game.screenshots.map((img, index) => (
              <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all cursor-pointer group shadow-lg">
                <img src={img} alt={`صورة ${index + 1}`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}