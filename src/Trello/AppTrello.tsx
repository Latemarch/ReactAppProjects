import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { IToDos, toDoState } from './atoms'
import { v4 as uuid } from 'uuid'
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
  const [toDos, setToDos] = useRecoilState<IToDos>(toDoState)
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log(destination)
    console.log(source)
    if (!destination) return
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const copyToDos = [...oldToDos[source.droppableId]]
        copyToDos.splice(source.index, 1)
        copyToDos.splice(destination?.index, 0, draggableId)
        console.log(copyToDos)
        return {
          ...oldToDos,
          [source.droppableId]: copyToDos,
        }
      })
    } else {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]
        const destinationBoard = [...allBoards[destination.droppableId]]
        sourceBoard.splice(source.index, 1)
        destinationBoard.splice(destination?.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        }
      })
    }
  }

  console.log(toDos)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {Object.keys(toDos).map((status) => (
          <TrelloBoard
            key={uuid()} //
            toDos={toDos[status]}
            boardId={status}
          />
        ))}
      </Wrapper>
    </DragDropContext>
  )
}
