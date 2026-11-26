import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 flex justify-center items-center">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">اتصل بنا</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">لديك استفسار أو اقتراح؟ نحن هنا لمساعدتك.</p>
          <form className="space-y-4">
            <input type="text" placeholder="الاسم" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="رسالتك..." rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">إرسال الرسالة</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}