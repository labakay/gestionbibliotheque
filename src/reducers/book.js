import { ADD_BOOK, DELETE_BOOK } from '../actions/book'

const initialState = {
  list: []
}

const deleteBook = (payload, list) => {
  const newList = list.filter(listElement => listElement.id != payload)
  return newList
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_BOOK:
      return {
        ...state,
        list: deleteBook(action.payload, state.list)
      }
    default:
      return state
  }
}
