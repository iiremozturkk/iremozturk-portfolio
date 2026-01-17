"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
  colorMode: string
  cycleColor: () => void
}>({
  theme: "dark",
  toggleTheme: () => {},
  colorMode: "purple",
  cycleColor: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

const colorPresets = [
  { name: "purple", hue: 260 },     // Mor
  { name: "blue", hue: 220 },       // Mavi
  { name: "pink", hue: 330 },       // Pembe
  { name: "cyan", hue: 180 },       // Cyan
  { name: "green", hue: 142 },      // Yeşil
  { name: "orange", hue: 35 },      // Turuncu
]

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [colorIndex, setColorIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  const colorMode = colorPresets[colorIndex].name
  const currentHue = colorPresets[colorIndex].hue

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedColorIndex = parseInt(localStorage.getItem("colorIndex") || "0")
    
    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (!isNaN(savedColorIndex)) {
      setColorIndex(savedColorIndex)
    }
    
    // Apply initial color
    document.documentElement.style.setProperty('--primary-hue', currentHue.toString())
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    if (theme === "light") {
      root.classList.remove("dark")
    } else {
      root.classList.add("dark")
    }
    localStorage.setItem("theme", theme)
    
    // Apply color changes
    root.style.setProperty('--primary-hue', currentHue.toString())
    localStorage.setItem("colorIndex", colorIndex.toString())
  }, [theme, colorIndex, currentHue, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  const cycleColor = () => {
    setColorIndex((prev) => (prev + 1) % colorPresets.length)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorMode, cycleColor }}>
      {children}
    </ThemeContext.Provider>
  )
}