import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import TrelloCard from './TrelloCard'
import { IToDos, toDoState } from '../atoms'
import { v4 as uuid } from 'uuid'
const Board = styled.div`
	height:400px;
	background-color: gray;
	border-radius: 0.7rem;
	margin: 1rem;
	padding-top: 30px;
	padding: 20px 10px;
	width: 200px;
	background-color: teal; //${(props) => props.theme.boardColor};
`
const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
`
interface Iborad {
  toDos: string[]
  boardId: string
}
export default function TrelloBoard({ toDos, boardId }: Iborad) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Board ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((el: string, idx: number) => (
            <TrelloCard key={uuid()} todo={el} index={idx} />
          ))}
          {magic.placeholder}
        </Board>
      )}
    </Droppable>
  )
}
