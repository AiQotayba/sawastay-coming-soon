import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import type { Metadata } from "next"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

// تحسين بيانات الميتا للـ SEO
export const metadata: Metadata = {
  title: "SawaStay - منصة الإقامة المريحة والآمنة",
  description:
    "منصة SawaStay تربط المضيفين بالباحثين عن إقامة مريحة وآمنة في مختلف المناطق. انضم إلينا قبل الإطلاق في 1 حزيران 2025.",
  keywords: ["سكن", "إقامة", "منصة حجز", "SawaStay", "إقامة آمنة", "سياحة", "سفر"],
  creator: "SawaStay",
  publisher: "SawaStay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sawastay.com"),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "SawaStay - منصة الإقامة المريحة والآمنة",
    description:
      "منصة SawaStay تربط المضيفين بالباحثين عن إقامة مريحة وآمنة في مختلف المناطق. انضم إلينا قبل الإطلاق في 1 حزيران 2025.",
    url: "https://sawastay.com",
    siteName: "SawaStay",
    images: [
      {
        url: "https://sawastay.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "SawaStay - منصة الإقامة المريحة والآمنة",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SawaStay - منصة الإقامة المريحة والآمنة",
    description:
      "منصة SawaStay تربط المضيفين بالباحثين عن إقامة مريحة وآمنة في مختلف المناطق. انضم إلينا قبل الإطلاق في 1 حزيران 2025.",
    images: ["https://sawastay.com/logo.jpg"],
    creator: "@sawastay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "9zhUznV_V308aTPwlJSYi7PSjzq87Z7j2ifJ0uXwgAA", // استبدل بكود التحقق الخاص بك
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <Head>
        <meta name="google-site-verification" content="9zhUznV_V308aTPwlJSYi7PSjzq87Z7j2ifJ0uXwgAA" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
