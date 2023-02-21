import { Outlet } from 'react-router-dom'
import SearchHearder from './SearchHearder'

export default function Home() {
  return (
    <div>
      <SearchHearder />
      <Outlet />
    </div>
  )
}
