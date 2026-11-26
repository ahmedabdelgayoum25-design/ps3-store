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
    <Link href={`/games/${game.slug}`} className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
      <div className="aspect-[3/4] relative w-full overflow-hidden bg-gray-800">
        <img 
          src={game.cover} 
          alt={game.title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {game.isNew && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10 animate-pulse">
            جديد
          </div>
        )}

        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-yellow-400 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10 flex items-center gap-1">
          ⭐ {game.rating}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            عرض التفاصيل
          </span>
        </div>
      </div>
      <div className="p-4 relative z-10 bg-gray-900 transition-colors duration-300">
        <h3 className="text-lg font-bold text-white truncate group-hover:text-blue-400 transition-colors">{game.title}</h3>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
          <span className="bg-gray-800 px-2 py-1 rounded text-xs">ISO</span>
          <span>{game.size}</span>
        </div>
      </div>
    </Link>
  );
}