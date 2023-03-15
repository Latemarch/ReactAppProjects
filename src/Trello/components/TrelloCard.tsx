import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
`
export default function TrelloCard() {
  return (
    <Draggable draggableId="firt" index={0}>
      {(m) => (
        <Card ref={m.innerRef} {...m.draggableProps} {...m.dragHandleProps}>
          one
        </Card>
      )}
    </Draggable>
  )
}
