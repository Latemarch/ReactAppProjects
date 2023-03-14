import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: red;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  font-size: 2rem;
`
const Col = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.svg`
  margin-right: 5px;
  width: 10rem;
  height: 2rem;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
  }
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
