import { Outlet } from 'react-router-dom'
import YoutubeHeader from './Components/YoutubeHeader'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export default function AppYoutube() {
  return (
    <Wrapper>
      <YoutubeHeader />
      <Outlet />
    </Wrapper>
  )
}
