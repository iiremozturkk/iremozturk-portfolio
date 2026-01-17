// Import'a ekle:
import { Menu, X, Download, Moon, Sun, Palette } from "lucide-react"

// Component içinde:
const { theme, toggleTheme, colorMode, cycleColor } = useTheme()

// Desktop Navigation'a ekle (theme toggle'dan sonra):
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

// Mobile Navigation'a ekle (theme toggle'dan sonra):
<motion.li
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -20, opacity: 0 }}
  transition={{ type: "spring", stiffness: 300, delay: 0.03 }}
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