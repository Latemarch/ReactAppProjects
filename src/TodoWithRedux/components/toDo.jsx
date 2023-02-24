import { BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteToDo, updateToDo } from '../fiatures/toDoSlice'
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
export default function ToDo({ todo }) {
  const { id, text } = todo
  const dispatch = useDispatch()
  return (
    <Li>
      <Input
        type="checkbox"
        checked={todo.status === 'Completed'}
        onChange={() => dispatch(updateToDo(todo))}
      ></Input>
      {text}
      <BsTrash onClick={() => dispatch(deleteToDo(id))} />
    </Li>
  )
}
