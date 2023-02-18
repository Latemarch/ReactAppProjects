import { BsTrash } from 'react-icons/bs'
import styled from 'styled-components'
const Li = styled.li`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 1px 10px;
  height: 35px;
  font-size: 1.2rem;
`
const Input = styled.input`
  height: 30px;
  width: 20px;
`
export default function ToDo({ todo, onDeleted, onUpdated }) {
  const { id, text } = todo
  const handleChange = () => onUpdated(todo)
  return (
    <Li>
      <Input
        type="checkbox"
        checked={todo.status === 'Completed'}
        onChange={handleChange}
      ></Input>

      {text}
      <BsTrash onClick={() => onDeleted(id)} />
    </Li>
  )
}
