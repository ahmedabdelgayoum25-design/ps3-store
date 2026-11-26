"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function GameDetailsContent() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  const rwandaLink = `https://wa.me/${game.rwandaPhone.replace(/\D/g, '')}?text=مرحباً، أريد طلب لعبة ${game.title}`;

  return (
    <main className="flex-grow container mx-auto px-6 py-28 relative z-10">
      <Link href="/games" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 font-semibold transition-colors">
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        {t.backToLibrary}
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="lg:w-1/3 w-full max-w-sm mx-auto relative z-10">
          <img src={game.cover} alt={game.title} className="w-full rounded-2xl shadow-2xl border border-slate-600" />
        </div>

        <div className="lg:w-2/3 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{game.title}</h1>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-sm shadow-md">⭐ {game.rating}</span>
          </div>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-8">{game.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-[#0f172a] p-4 rounded-xl text-center border border-slate-700">
              <span className="block text-slate-400 text-sm mb-1">{t.size}</span>
              <span className="font-bold text-xl text-white">{game.size}</span>
            </div>
            <div className="bg-[#0f172a] p-4 rounded-xl text-center border border-slate-700">
              <span className="block text-slate-400 text-sm mb-1">{t.format}</span>
              <span className="font-bold text-xl text-white">ISO</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">{t.orderBtn}</h3>
            
            <a 
              href={rwandaLink}
              target="_blank"
              rel="noopener noreferrer"
              title={t.orderBtn}
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-1"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            
            <p className="text-slate-400 text-sm mt-4">{t.orderNote} ({game.price}).</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white border-r-4 border-blue-600 pr-4">{t.screenshots}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.screenshots.map((img, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all cursor-pointer group shadow-lg">
              <img src={img} alt={`Screenshot ${index + 1}`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}