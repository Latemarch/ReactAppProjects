import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import TrelloCard from './TrelloCard'
import { toDoState } from '../atoms'
const Board = styled.div`
  background-color: gray;
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
export default function TrelloBoard() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  return (
    <Droppable droppableId="one">
      {(magic) => (
        <Board ref={magic.innerRef} {...magic.droppableProps}>
          <TrelloCard />
          {magic.placeholder}
        </Board>
      )}
    </Droppable>
  )
}
