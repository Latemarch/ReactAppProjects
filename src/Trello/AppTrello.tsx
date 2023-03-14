import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: gray;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Board = styled.div`
  border-radius: 0.7rem;
  margin: 1rem;
  padding-top:30px;
  padding: 20px 10px;
  width:100%;
  background-color: teal; //${(props) => props.theme.boardColor};
`
const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
`
export default function AppTrello() {
  const onDragEnd = () => {}
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="firt" index={0}>
                {(m) => (
                  <Card
                    ref={m.innerRef}
                    {...m.draggableProps}
                    {...m.dragHandleProps}
                  >
                    one
                  </Card>
                )}
              </Draggable>
              <Draggable draggableId="secod" index={1}>
                {(magic) => (
                  <Card
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    two
                  </Card>
                )}
              </Draggable>
            </Board>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  )
}
