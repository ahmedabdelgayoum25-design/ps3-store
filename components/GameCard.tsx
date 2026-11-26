import Link from 'next/link';

interface GameCardProps {
  game: {
    title: string;
    slug: string;
    cover: string;
    size: string;
    rating: number;
    isNew: boolean;
  }
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group flex flex-col bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={game.cover} 
          alt={game.title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* شارات */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {game.isNew && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
              جديد
            </span>
          )}
          <span className="bg-black/80 backdrop-blur-md text-yellow-400 text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1 w-max">
            ⭐ {game.rating}
          </span>
        </div>

        {/* تأثير الـ Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <h3 className="text-lg font-bold text-white mb-1 truncate group-hover:text-blue-400 transition-colors">{game.title}</h3>
        
        <div className="mt-auto pt-4 flex justify-between items-center text-sm">
          <span className="bg-[#0f172a] text-slate-300 px-2 py-1 rounded text-xs font-medium border border-slate-700">ISO</span>
          <span className="text-slate-400">{game.size}</span>
        </div>
      </div>
    </Link>
  );
}