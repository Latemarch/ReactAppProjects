import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState: {
    toDos: [
      { id: 1, text: 'work', status: 'Active' },
      { id: 2, text: 'study', status: 'Active' },
      { id: 3, text: 'shopping', status: 'Active' },
    ],
    filter: 'All',
  },
  reducers: {
    addToDo: (state, action) => {
      const text = action.payload
      text.trim().length &&
        state.toDos.push({
          id: `${text}${state.toDos.length}`,
          text,
          status: 'Active',
        })
    },
    deleteToDo: (state, action) => {
      const id = action.payload
      const idx = state.toDos.findIndex((t) => t.id === id)
      idx && state.toDos.splice(idx, 1)
    },
    updateToDo: (state, action) => {
      const { status, id } = action.payload
      const idx = state.toDos.findIndex((t) => t.id === id)
      const newStatus = status === 'Active' ? 'Completed' : 'Active'
      state.toDos[idx].status = newStatus
    },
    updateFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const {
  addToDo,
  deleteToDo,
  updateToDo,
  updateFilter,
} = toDoSlice.actions
export default toDoSlice.reducer
