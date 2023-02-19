import React from 'react'
import styled from 'styled-components'
import { BsSearch, BsYoutube } from 'react-icons/bs'

const Header = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export default function YoutubeHeader() {
  return (
    <Header>
      <div>
        <BsYoutube />
        Youtube
      </div>
      <form>
        <input type="text" placeholder={'Search...'} />
        <button>
          <BsSearch />
        </button>
      </form>
    </Header>
  )
}
