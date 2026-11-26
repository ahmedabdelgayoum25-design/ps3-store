import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-28 flex justify-center items-center relative overflow-hidden">
        
        {/* توهج خلفي */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="bg-[#111111] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800 w-full max-w-2xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
            <p className="text-gray-400">لديك استفسار أو تواجه مشكلة؟ نحن هنا لمساعدتك.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الاسم الكامل</label>
                <input type="text" placeholder="أدخل اسمك" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
                <input type="email" placeholder="name@example.com" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">رسالتك</label>
              <textarea rows={5} placeholder="اكتب رسالتك هنا..." className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
              إرسال الرسالة
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center gap-8 text-center">
            <div>
              <p className="text-gray-400 text-sm mb-1">راسلنا عبر الواتساب</p>
              <p className="text-white font-bold" dir="ltr">+249 000 000 000</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">البريد الإلكتروني</p>
              <p className="text-white font-bold">support@ps3store.com</p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}