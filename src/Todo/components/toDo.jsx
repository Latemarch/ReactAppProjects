import { BsTrash } from 'react-icons/bs'
export default function ToDo({ todo, onDeleted, onUpdated }) {
  const { id, text } = todo
  const handleChange = () => onUpdated(todo)
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.status === 'Completed'}
        onChange={handleChange}
      ></input>

      {text}
      <BsTrash onClick={() => onDeleted(id)} />
    </li>
  )
}
