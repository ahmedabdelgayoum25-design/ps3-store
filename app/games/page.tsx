"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filters = ["الكل", "أكشن", "مغامرات", "رياضة", "رعب"];

  // فلترة الألعاب بناءً على البحث والتصنيف
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    // ملاحظة: التصنيف هنا وهمي للتجربة، لاحقاً يمكنك إضافة حقل category لبياناتك
    const matchesFilter = activeFilter === "الكل" || true; 
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">كل ألعاب PS3</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">اكتشف وحمّل أفضل ألعاب البلايستيشن 3</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="ابحث عن لعبة..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 dark:text-gray-400">لم يتم العثور على ألعاب تطابق بحثك.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}