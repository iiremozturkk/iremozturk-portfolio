import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ThemeProvider from "./components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "İrem Öztürk | Full Stack Developer",
  description: "Computer & Software Engineering student passionate about Full Stack Development and AI/ML. Explore my projects and skills.",
  keywords: ["Full Stack Developer", "Software Engineer", "Python", "Go", "JavaScript", "Vue.js", "Backend Developer"],
  authors: [{ name: "İrem Öztürk" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}