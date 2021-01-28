export const ADD_BOOK = 'ADD_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'

export const addBook = payload => ({
  type: ADD_BOOK,
  payload
})

export const deleteBook = payload => ({
  type: DELETE_BOOK,
  payload
})
