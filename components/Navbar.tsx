import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* الشعار */}
        <Link href="/" className="text-2xl font-black text-white flex items-center gap-3 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-500 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span>PS3 Store</span>
        </Link>

        {/* الروابط */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <Link href="/games" className="hover:text-white transition-colors">المكتبة</Link>
          <Link href="/about" className="hover:text-white transition-colors">من نحن</Link>
          <Link href="/contact" className="hover:text-white transition-colors">اتصل بنا</Link>
        </div>

        {/* زر التحميل السريع (اختياري) */}
        <div className="hidden md:block">
          <Link href="/games" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-600/20">
            تحميل الآن
          </Link>
        </div>

      </div>
    </nav>
  );
}