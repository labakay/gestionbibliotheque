import { ADD_BOOK } from '../actions/book'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}
