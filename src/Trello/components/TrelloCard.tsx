import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
`
function TrelloCard({ todo, index }: { todo: string; index: number }) {
  console.log(todo, 'is randering')
  return (
    <Draggable draggableId={todo} index={index}>
      {(m) => (
        <Card ref={m.innerRef} {...m.draggableProps} {...m.dragHandleProps}>
          {todo}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(TrelloCard)
