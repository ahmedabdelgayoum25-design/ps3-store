import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md text-white py-4 border-b border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-500 flex items-center gap-2">
          <span className="text-3xl">🎮</span> PS3 Store
        </Link>
        <div className="flex items-center space-x-6 space-x-reverse font-semibold">
          <Link href="/" className="hover:text-blue-400 transition-colors">الرئيسية</Link>
          <Link href="/games" className="hover:text-blue-400 transition-colors">كل الألعاب</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">اتصل بنا</Link>
        </div>
      </div>
    </nav>
  );
}