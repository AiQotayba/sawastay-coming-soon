"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "ar" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    welcome: "مرحبًا بكم في SawaStay!",
    description:
      "نحن نعمل بكل جهد لإطلاق منصتنا في 1 حزيران 2025، والتي ستربط المضيفين بالباحثين عن إقامة مريحة وآمنة في مختلف المناطق.",
    "coming.soon": "الانطلاقة قريبًا",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني",
    "early.access.title": "كن أول من يعلم!",
    "early.access.description":
      "سجل بريدك الإلكتروني للحصول على إشعار عند إطلاق المنصة والتمتع بمزايا حصرية للمستخدمين الأوائل.",
    email: "البريد الإلكتروني",
    subscribe: "اشترك الآن",
    "contact.title": "للاستفسارات والتواصل:",
    "rights.reserved": "جميع الحقوق محفوظة.",
  },
  en: {
    welcome: "Welcome to SawaStay!",
    description:
      "We are working hard to launch our platform on June 1, 2025, which will connect hosts with those looking for comfortable and safe accommodations in various regions.",
    "coming.soon": "Coming Soon",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    "early.access.title": "Be the First to Know!",
    "early.access.description":
      "Register your email to be notified when the platform launches and enjoy exclusive benefits for early users.",
    email: "Email",
    subscribe: "Subscribe Now",
    "contact.title": "For inquiries and contact:",
    "rights.reserved": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.ar] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
