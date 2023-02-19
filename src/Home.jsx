import { Outlet } from 'react-router-dom'
import SearchHearder from './SearchHearder'
import styled from 'styled-components'
const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  return (
    <HomePage>
      <SearchHearder />
      <Outlet />
    </HomePage>
  )
}
