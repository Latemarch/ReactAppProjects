import ToDo from './toDo'

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
    <ul>
      {getFilteredToDos(toDos, filter).map((todo) => (
        <ToDo
          key={todo.id}
          onDeleted={handleDeleted}
          onUpdated={handleUpdated}
          todo={todo}
        />
      ))}
    </ul>
  )
}
