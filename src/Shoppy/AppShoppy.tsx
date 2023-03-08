import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import HeaderShoppy from './components/HeaderShoppy'
import { ContextShoppy } from './context/ContextShoppy'

const queryClient1 = new QueryClient()
export default function AppShoppy() {
  return (
    <div className="flex w-full justify-center ">
      <div className="w-full max-w-screen-2xl">
        <QueryClientProvider client={queryClient1}>
          <ContextShoppy>
            <HeaderShoppy />
            <Outlet />
          </ContextShoppy>
        </QueryClientProvider>
      </div>
    </div>
  )
}
