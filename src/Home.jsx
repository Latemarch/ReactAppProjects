import { Outlet } from 'react-router-dom'
import SearchHearder from './SearchHearder'

export default function Home() {
  return (
    <>
      <SearchHearder />
      <div className="flex flex-col items-center pt-[50px]">
        <Outlet />
      </div>
    </>
  )
}
