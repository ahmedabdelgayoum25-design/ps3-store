"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "@/data/translations";

type Language = "ar" | "en";
type TranslationType = typeof translations.ar;

interface LanguageContextType {
  lang: Language;
  t: TranslationType;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  // تحميل اللغة المحفوظة عند بدء التطبيق
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("app-lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}