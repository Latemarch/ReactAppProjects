import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/input'
import ToDoList from './components/ToDoList'

const list = [
  { id: 1, text: 'work', status: 'Active' },
  { id: 2, text: 'study', status: 'Active' },
  { id: 3, text: 'shopping', status: 'Active' },
]

function AppToDoList() {
  const [toDos, setToDos] = useState(list)
  const [filter, setFilter] = useState('All')

  return (
    <>
      <Header onFilterChange={setFilter} />
      <ToDoList toDos={toDos} filter={filter} setToDos={setToDos} />
      <Input toDos={toDos} onAdd={setToDos} />
    </>
  )
}

export default AppToDoList
