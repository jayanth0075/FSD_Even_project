import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { api } from '../services/api'

interface User {
  id: string
  name?: string
  email: string
  username: string
  avatar?: string
  bio?: string
  joinDate?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  signUp: (username: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check if user is already logged in and token is valid
  useEffect(() => {
    const storedUser = localStorage.getItem('ghostwrite_user')
    const token = localStorage.getItem('ghostwrite_token')

    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        localStorage.removeItem('ghostwrite_user')
        localStorage.removeItem('ghostwrite_token')
      }
    }
    setIsLoading(false)
  }, [])

  const signUp = async (username: string, email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await api.signUp(email, password, username)
      
      // Store user and JWT token
      localStorage.setItem('ghostwrite_user', JSON.stringify(response.user))
      localStorage.setItem('ghostwrite_token', response.token)
      
      setUser(response.user)
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Sign up failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await api.signIn(email, password)
      
      // Store user and JWT token
      localStorage.setItem('ghostwrite_user', JSON.stringify(response.user))
      localStorage.setItem('ghostwrite_token', response.token)
      
      setUser(response.user)
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Sign in failed'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('ghostwrite_user')
    localStorage.removeItem('ghostwrite_token')
    setError(null)
  }

  const clearError = () => {
    setError(null)
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading,
        error,
        signUp, 
        signIn, 
        signOut,
        clearError
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
