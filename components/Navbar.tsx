import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-500 flex items-center gap-2">
          <span className="text-3xl">🎮</span> PS3 Library
        </Link>
        <div className="flex items-center space-x-6 space-x-reverse font-semibold">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">الرئيسية</Link>
          <Link href="/games" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">كل الألعاب</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">اتصل بنا</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}