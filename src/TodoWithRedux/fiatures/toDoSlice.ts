import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface ToDo {
  id: string
  text: string
  status: 'Active' | 'Completed'
}
interface ToDoState {
  toDos: ToDo[]
  filter: 'All' | 'Active' | 'Completed'
}
const initialState: ToDoState = {
  toDos: [
    { id: '1', text: 'work', status: 'Active' },
    { id: '2', text: 'study', status: 'Active' },
    { id: '3', text: 'shopping', status: 'Active' },
  ],
  filter: 'All',
}
export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const text = action.payload
      text.trim().length &&
        state.toDos.push({
          id: `${text}${state.toDos.length}`,
          text,
          status: 'Active',
        })
    },
    deleteToDo: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const idx = state.toDos.findIndex((t) => t.id === id)
      idx && state.toDos.splice(idx, 1)
    },
    updateToDo: (
      state,
      action: PayloadAction<{ id: string; status: 'Active' | 'Completed' }>,
    ) => {
      const { status, id } = action.payload
      const idx = state.toDos.findIndex((t) => t.id === id)
      const newStatus = status === 'Active' ? 'Completed' : 'Active'
      state.toDos[idx].status = newStatus
    },
    updateFilter: (
      state,
      action: PayloadAction<'All' | 'Active' | 'Completed'>,
    ) => {
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
