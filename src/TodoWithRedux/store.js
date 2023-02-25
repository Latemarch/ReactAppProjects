import { configureStore } from '@reduxjs/toolkit'
import toDos from './fiatures/toDoSlice'

export default configureStore({
  reducer: { toDos },
})
