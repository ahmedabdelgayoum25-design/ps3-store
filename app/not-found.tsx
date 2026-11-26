// app/not-found.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-8xl font-black text-blue-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-6">الصفحة غير موجودة</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            عذراً، اللعبة أو الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-600/30"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}