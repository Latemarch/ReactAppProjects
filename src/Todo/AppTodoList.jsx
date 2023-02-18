import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/input'
import ToDoList from './components/ToDoList'
import styled from 'styled-components'

const list = [
  { id: 1, text: 'work', status: 'Active' },
  { id: 2, text: 'study', status: 'Active' },
  { id: 3, text: 'shopping', status: 'Active' },
]

const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #35383e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
`

function AppToDoList() {
  const [toDos, setToDos] = useState(list)
  const [filter, setFilter] = useState('All')

  return (
    // <Wrapper>
    <Container>
      <Header onFilterChange={setFilter} filterNow={filter} />
      <ToDoList toDos={toDos} filter={filter} setToDos={setToDos} />
      <Input toDos={toDos} setToDos={setToDos} />
    </Container>
    /* </Wrapper> */
  )
}

export default AppToDoList
