import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 flex justify-center items-center">
        <div className="bg-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800 max-w-3xl w-full text-center relative overflow-hidden">
          {/* تأثير توهج خلفي */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              مرحباً بك في <span className="text-blue-500">PS3 Store</span>
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              نحن منصة متخصصة توفر لك أفضل وأشهر ألعاب <strong>PlayStation 3</strong> بصيغة <strong>ISO و PowerISO</strong>.
              هدفنا هو إحياء ذكريات البلايستيشن 3 وتوفير تجربة تحميل سريعة وآمنة لجميع عشاق الألعاب الكلاسيكية.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              جميع الروابط التي نقدمها مباشرة، بجودة عالية، وخالية من أي برامج ضارة. يمكنك تصفح المكتبة، اختيار لعبتك المفضلة، والاستمتاع بها على محاكي RPCS3 أو على جهازك.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-600/30">
                تصفح الألعاب الآن
              </Link>
              <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all">
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}