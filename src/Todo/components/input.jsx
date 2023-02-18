import { useState } from 'react'
import styled from 'styled-components'
const Form = styled.form`
  display: flex;
  width: 100%;
  flex-grow: 1;
`
const InputToDo = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  width: 70%;
  border: none;
  color: white;
  padding: 10px;
  &:focus {
    outline: none;
  }
  font-size: 1.2rem;
`
const Button = styled.button`
  width: 30%;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  &:hover {
    background-color: tomato;
  }
`

export default function Input({ toDos, setToDos }) {
  const [text, setText] = useState('')
  const handlechange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length !== 0) {
      setToDos([
        ...toDos,
        { id: `${text}${toDos.length}`, text, status: 'Active' },
      ])
      setText('')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputToDo
        placeholder="Add Todo..."
        value={text}
        onChange={handlechange}
      ></InputToDo>
      <Button>Add</Button>
    </Form>
  )
}
