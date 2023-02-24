export const initialState = {
  toDos: [
    { id: 1, text: 'work', status: 'Active' },
    { id: 2, text: 'study', status: 'Active' },
    { id: 3, text: 'shopping', status: 'Active' },
  ],
}

export function reducer(state, action) {
  const { payload: text } = action
  switch (action.type) {
    case 'add':
      const result = {
        ...state,
        toDos: [
          ...state.toDos,
          {
            id: `${text}${state.toDos.length}`,
            text,
            status: 'Active',
          },
        ],
      }
      console.log(state.toDos)
      return result
  }
}
