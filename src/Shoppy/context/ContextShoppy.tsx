import { createContext, useContext, useEffect, useState } from 'react'
import { onUserStateChange } from '../apis/firebase'
import { login, logout } from '../apis/firebase'

export interface IContext {
  user: { isAdmin?: boolean }
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
