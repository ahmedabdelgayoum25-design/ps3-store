"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-28 flex justify-center items-center">
        <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700 max-w-3xl w-full text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">{t.aboutTitle}</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">{t.aboutDesc}</p>
            <Link href="/games" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-600/30">{t.aboutBtn}</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}