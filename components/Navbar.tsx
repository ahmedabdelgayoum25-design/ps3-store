"use client";
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-slate-700">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-black text-white flex items-center gap-3 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-500 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span>PS3 Store</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">{t.home}</Link>
          <Link href="/games" className="hover:text-white transition-colors">{t.library}</Link>
          <Link href="/about" className="hover:text-white transition-colors">{t.about}</Link>
          <Link href="/contact" className="hover:text-white transition-colors">{t.contact}</Link>
        </div>

        {/* زر تبديل اللغة */}
        <button 
          onClick={toggleLanguage}
          className="bg-[#1e293b] hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors border border-slate-600"
        >
          {lang === "ar" ? "English 🇬🇧" : "العربية 🇸🇦"}
        </button>
      </div>
    </nav>
  );
}