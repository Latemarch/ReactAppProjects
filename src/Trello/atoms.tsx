import { atom } from 'recoil'

export type toDo = string
export interface IToDos {
  [key: string]: toDo[]
}
export const toDoState = atom<IToDos>({
  key: 'toDo',
  default: {
    todos: ['a', 'b', 'c', 'd', 'e', 'f'],
    doing: [],
    done: [],
  },
})
