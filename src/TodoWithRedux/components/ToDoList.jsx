import ToDo from './toDo'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Ul = styled.ul`
  padding: 0;
  margin: 0;
`

export default function ToDoList() {
  const { toDos, filter } = useSelector((state) => state.toDoReducer)

  return (
    <Wrapper>
      <Ul>
        {getFilteredToDos(toDos, filter).map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </Ul>
    </Wrapper>
  )
}

const getFilteredToDos = (toDos, filter) => {
  if (filter === 'All') {
    return toDos
  }
  return toDos.filter((todo) => todo.status === filter)
}
