import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]"> {/* تم تطبيق الثيم الأزرق */}
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-28 flex justify-center items-center relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700 w-full max-w-2xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
            <p className="text-slate-400">نحن هنا للإجابة على استفساراتك ومساعدتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* البريد الإلكتروني */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 transition-colors">
              <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">البريد الإلكتروني</h3>
              <a href="mailto:kentonsoftware@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors" dir="ltr">kentonsoftware@gmail.com</a>
            </div>

            {/* رقم التواصل */}
            <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center hover:border-green-500 transition-colors">
              <div className="bg-green-600/20 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">رقم التواصل</h3>
              <a href="tel:+250000000000" className="text-slate-400 hover:text-green-400 transition-colors" dir="ltr">+250 000 000 000</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}