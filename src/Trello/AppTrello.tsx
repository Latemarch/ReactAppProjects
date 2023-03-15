import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import TrelloBoard from './components/TrelloBoard'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function AppTrello() {
  const onDragEnd = ({ destination, source }: DropResult) => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <TrelloBoard />
      </Wrapper>
    </DragDropContext>
  )
}
