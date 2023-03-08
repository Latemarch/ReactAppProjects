import { createContext, useContext, useEffect, useState } from 'react'
import { login, logout, onUserStateChange } from '../apis/firebase.js'

export interface IContext {
  user: { isAdmin?: boolean; uid?: string }
  login(): void
  logout(): void
}
const AuthContext = createContext<IContext | null>(null)

export function ContextShoppy({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ isAdmin?: boolean }>({})

  useEffect(() => {
    onUserStateChange(setUser)
  }, [])
  const value = { user, login, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}
