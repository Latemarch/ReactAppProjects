import ToDo from './toDo'
import styled from 'styled-components'
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

const getFilteredToDos = (toDos, filter) => {
  if (filter === 'All') return toDos
  return toDos.filter((todo) => todo.status === filter)
}

export default function ToDoList({ toDos, filter, setToDos }) {
  const handleDeleted = (id) => setToDos(toDos.filter((t) => t.id !== id))
  const handleUpdated = (todo) =>
    setToDos(
      toDos.map((t) => {
        let status = todo.status === 'Active' ? 'Completed' : 'Active'
        if (t.id === todo.id) {
          return { ...t, status }
        }
        return t
      }),
    )
  return (
    <Wrapper>
      <Ul>
        {getFilteredToDos(toDos, filter).map((todo) => (
          <ToDo
            key={todo.id}
            onDeleted={handleDeleted}
            onUpdated={handleUpdated}
            todo={todo}
          />
        ))}
      </Ul>
    </Wrapper>
  )
}
