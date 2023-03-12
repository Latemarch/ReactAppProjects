import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import HeaderNetflix from './Components/HeaderNetflix'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export default function AppNetflix() {
  return (
    <Wrapper>
      <HeaderNetflix />
      <Outlet />
    </Wrapper>
  )
}
