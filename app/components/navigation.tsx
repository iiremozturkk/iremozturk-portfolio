"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "./theme-provider"

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  
  const { theme, toggleTheme, colorMode, cycleColor } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadCV = () => {
    window.open("/irem-ozturk-cv.pdf", "_blank")
  }

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/50" : "bg-background/70"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.button
          onClick={scrollToTop}
          className="font-mono text-xl font-bold text-primary cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {"<İÖ />"}
        </motion.button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            </motion.li>
          ))}
          
          {/* Theme Toggle Button - Desktop */}
          <motion.li 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all hover:border-primary hover:bg-primary/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </motion.li>
          
          {/* Color Palette Button - Desktop */}
          <motion.li 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.55 }}
          >
            <button
              onClick={cycleColor}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all hover:border-primary hover:bg-primary/10"
              aria-label="Change color theme"
              title={`Current: ${colorMode}`}
            >
              <Palette className="h-4 w-4" />
            </button>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleDownloadCV}
              className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
            >
              <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              Download CV
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative z-50 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed left-0 right-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
            >
              <div className="mx-auto max-w-6xl px-6 py-4">
                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-all ${
                          activeSection === item.id
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                  
                  {/* Theme Toggle Button - Mobile */}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.03 }}
                  >
                    <button
                      onClick={() => {
                        toggleTheme()
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 text-base font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          Dark Mode
                        </>
                      )}
                    </button>
                  </motion.li>
                  
                  {/* Color Palette Button - Mobile */}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                  >
                    <button
                      onClick={() => {
                        cycleColor()
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 text-base font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
                    >
                      <Palette className="h-4 w-4" />
                      Change Color ({colorMode})
                    </button>
                  </motion.li>
                  
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="mt-2"
                  >
                    <button
                      onClick={() => {
                        handleDownloadCV()
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}