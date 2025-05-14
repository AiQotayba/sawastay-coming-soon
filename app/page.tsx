"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const { language, setLanguage, t } = useLanguage()

  const [mounted, setMounted] = useState(false)

  // Calculate time until June 1, 2025
  useEffect(() => {
    const targetDate = new Date("2025-06-01T00:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor(difference / 1000 / 60) % 60,
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-white overflow-hidden ">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#F94A6C]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#F94A6C]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <header className="flex justify-center mb-8">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Image src="/logo.png" alt="SawaStay Logo" width={200} height={200} className="h-auto" priority />
          </motion.div>
          <div className="absolute top-6 right-6 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-gray-600 hover:text-[#F94A6C]"
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </Button>
          </div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-2xl md:text-6xl font-bold text-[#F94A6C] mb-6 text-nowrap">{t("welcome")}</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">{t("description")}</p>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">{t("coming.soon")}</h2>
            <div className="flex  justify-center gap-4 md:gap-8">
              {[
                { label: t("seconds"), value: timeLeft.seconds },
                { label: t("minutes"), value: timeLeft.minutes },
                { label: t("hours"), value: timeLeft.hours },
                { label: t("days"), value: timeLeft.days },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white shadow-lg rounded-xl w-14 h-14 md:w-24 md:h-24 flex items-center justify-center mb-2 border-2 border-[#F94A6C]/20">
                    <span className="text-2xl md:text-4xl font-bold text-[#F94A6C]">{item.value}</span>
                  </div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{t("contact.title")}</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
              <a
                href="mailto:contact@sawastay.com"
                className="flex items-center gap-2 text-[#F94A6C] hover:text-[#E03A5C] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@sawastay.com</span>
              </a>
              <a
                href="https://wa.me/963935919671"
                className="flex items-center gap-2 text-[#F94A6C] hover:text-[#E03A5C] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span dir="ltr">+963 935 919 671</span>
              </a>
            </div>
          </motion.div>
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} SawaStay. {t("rights.reserved")}
          </p>
        </footer>
      </div>

      {/* Floating animated house icons */}
      {mounted &&
        [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed z-0"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.2,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="text-[#F94A6C]/10 text-5xl">🏠</div>
          </motion.div>
        ))}
    </div>
  )
}
