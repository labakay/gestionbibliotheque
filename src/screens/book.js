import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ButtonSubmit from '../components/button'

import { addBook } from '../actions/book'

const Book = () => {
  // const [inputValue, setInputValue] = useState('')
  const [newBook, setNewBook] = useState({ name: '', author: '' })
  const dispatch = useDispatch()
  const bookListe = useSelector(state => state.book.list)

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addBook(newBook))

    setNewBook({ name: '', author: '' })
  }

  return (
    <BookContainer>
      <h1>Ajouter un livre</h1>
      <StyledForm onSubmit={onSubmit}>
        <div>
          <StyledInput
            value={newBook.author}
            onChange={e => setNewBook({ ...newBook, author: e.target.value })}
            // onChange={e => setInputValue(e.target.value)}
            type='text'
            placeholder='Auteur du livre'
          ></StyledInput>
        </div>
        <div>
          <StyledInput
            value={newBook.name}
            onChange={e => setNewBook({ ...newBook, name: e.target.value })}
            // onChange={e => setInputValue(e.target.value)}
            type='text'
            placeholder='Nom du livre'
          ></StyledInput>
        </div>
        <ButtonSubmit name='Ajouter' width='175px'></ButtonSubmit>
      </StyledForm>
      {bookListe.map(book => (
        <p key={book.author}>
          {book.name} {book.author}
        </p>
      ))}
    </BookContainer>
  )
}

const BookContainer = styled.div`
  text-align: center;
  color: green;
`
const StyledForm = styled.form`
  padding: 20px;
  font-size: 14px;
  width: 540px;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 8px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  color: #24292e;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`

const StyledInput = styled.input`
  padding: 5px;
  width: 60%;
  height: 1.5rem;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`

export default Book
