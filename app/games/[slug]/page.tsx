import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameDetailsContent from "./GameDetailsContent";

export default function GameDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center text-white text-xl">جارٍ تحميل اللعبة...</div>}>
        <GameDetailsContent />
      </Suspense>
      <Footer />
    </div>
  );
}