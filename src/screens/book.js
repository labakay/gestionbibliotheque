import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { addBook } from '../actions/book'

const Book = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const bookListe = useSelector(state => state.book.list)

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addBook(inputValue))

    setInputValue('')
  }

  return (
    <BookContainer>
      <h1>Les livres</h1>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type='text'
          placeholder='Nom du repo'
        ></StyledInput>
      </StyledForm>
      {bookListe.map(book => (
        <p>{book}</p>
      ))}
    </BookContainer>
  )
}

const BookContainer = styled.div`
  text-align: center;
  color: green;
`

const StyledForm = styled.form``

const StyledInput = styled.input``

export default Book
