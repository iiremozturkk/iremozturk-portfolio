"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    window.open("/irem-ozturk-cv.pdf", "_blank")
  }

  // YENİ: Tüm navigasyon için ortak click handler
  const handleNavClick = (href: string) => {
    // Mobil menüyü kapat
    setIsMobileMenuOpen(false)
    
    // Hash'ten ID'yi çıkar (#about -> about)
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    
    if (element) {
      // Smooth scroll
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="font-mono text-xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {"<İÖ />"}
        </motion.a>

        {/* Desktop Navigation - GÜNCELLENDİ */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
              </a>
            </motion.li>
          ))}
          <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - GÜNCELLENDİ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-background/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleDownloadCV()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}