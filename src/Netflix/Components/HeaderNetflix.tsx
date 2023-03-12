import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: red;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const Col = styled.div``
const Logo = styled.svg`
  margin-right: 50px;
`
const Items = styled.ul`
  display: flex;
  align-items: center;
`

const Item = styled.li``
export default function HeaderNetflix() {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>
    </Nav>
  )
}
