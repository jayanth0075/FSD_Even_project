import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('fedf_theme')
    return (saved as Theme) || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('fedf_theme', theme)
    
    // Update CSS variables based on theme
    const root = document.documentElement
    if (theme === 'dark') {
      root.style.colorScheme = 'dark'
      root.style.setProperty('--bg-primary', '#0d1117')
      root.style.setProperty('--bg-secondary', '#161b22')
      root.style.setProperty('--bg-tertiary', '#21262d')
      root.style.setProperty('--text-primary', '#e6edf3')
      root.style.setProperty('--text-secondary', '#8b949e')
      root.style.setProperty('--border-subtle', '#30363d')
    } else {
      root.style.colorScheme = 'light'
      root.style.setProperty('--bg-primary', '#ffffff')
      root.style.setProperty('--bg-secondary', '#f6f8fa')
      root.style.setProperty('--bg-tertiary', '#eaeef2')
      root.style.setProperty('--text-primary', '#24292f')
      root.style.setProperty('--text-secondary', '#57606a')
      root.style.setProperty('--border-subtle', '#d0d7de')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
