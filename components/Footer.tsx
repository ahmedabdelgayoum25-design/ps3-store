export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#0f172a] py-12 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-2xl">🎮</span>
          <h2 className="text-2xl font-bold text-white">PS3 Store</h2>
        </div>
        <p className="text-slate-400 mb-6">وجهتك الأولى لألعاب البلايستيشن 3 الكلاسيكية.</p>
        <div className="text-sm text-slate-500 font-medium">
          Kenton Software &copy; جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}