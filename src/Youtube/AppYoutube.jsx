import { Outlet } from 'react-router-dom'
import YoutubeHeader from './Components/YoutubeHeader'
import styled from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function AppYoutube() {
  return (
    <div className="flex w-full h-full bg-bgColor justify-center text-white">
      <div className="flex flex-col w-full h-full max-w-screen-2xl ">
        <YoutubeHeader />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  )
}
