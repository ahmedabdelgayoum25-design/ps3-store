"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import { useLanguage } from "@/components/LanguageProvider";

export default function GamesPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-28">
        <h1 className="text-4xl font-bold mb-10 text-center text-white">{t.library}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}