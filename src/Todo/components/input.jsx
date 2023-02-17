import { useState } from 'react'

export default function Input({ toDos, onAdd }) {
  const [text, setText] = useState('')
  const handlechange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd([
      ...toDos,
      { id: `${text}${toDos.length}`, text: text, status: 'Active' },
    ])
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Todo..."
        value={text}
        onChange={handlechange}
      ></input>
      <button>Add</button>
    </form>
  )
}
