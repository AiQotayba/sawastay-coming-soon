import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// Import the LanguageProvider at the top of the file
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin" ] })

export const metadata = {
  title: "SawaStay - قريبًا",
  description: "منصة SawaStay - ربط المضيفين بالباحثين عن إقامة مريحة وآمنة", 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
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
