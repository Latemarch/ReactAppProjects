import { Outlet } from 'react-router-dom'
import YoutubeHeader from './Components/YoutubeHeader'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function AppYoutube() {
  return (
    <div className="second flex w-full h-auto min-h-[calc(100vh-50px)] bg-bgColor justify-center text-white">
      <div className="w-full max-w-screen-2xl">
        <YoutubeHeader />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  )
}
