import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './fiatures/toDoSlice'

export default configureStore({
  reducer: { toDoReducer },
})
