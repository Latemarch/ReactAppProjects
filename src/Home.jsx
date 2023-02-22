import { Outlet } from 'react-router-dom'
import SearchHearder from './SearchHearder'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <SearchHearder />
      <Outlet />
    </div>
  )
}
