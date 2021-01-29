import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import ButtonSubmit from '../button'
import { uuid } from 'uuidv4'

import { addBook } from '../../actions/book'
import { Title } from '../texts'

const BookForm = () => {
  const [newBook, setNewBook] = useState({ name: '', author: '', quantity: '' })
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()
    dispatch(addBook({ id: uuid(), value: newBook }))

    setNewBook({ name: '', author: '', quantity: '' })
  }

  return (
    <BookFormContainer>
      <Title>Ajouter un livre</Title>
      <StyledForm onSubmit={onSubmit}>
        <div>
          <StyledInput
            value={newBook.author}
            onChange={e => setNewBook({ ...newBook, author: e.target.value })}
            type='text'
            placeholder='Auteur du livre'
          ></StyledInput>
        </div>
        <div>
          <StyledInput
            value={newBook.name}
            onChange={e => setNewBook({ ...newBook, name: e.target.value })}
            type='text'
            placeholder='Nom du livre'
          ></StyledInput>
        </div>
        <div>
          <StyledInput
            value={newBook.quantity}
            onChange={e => setNewBook({ ...newBook, quantity: e.target.value })}
            type='text'
            placeholder='Quantité'
          ></StyledInput>
        </div>
        <ButtonSubmit name='Valider' width='175px'></ButtonSubmit>
      </StyledForm>
    </BookFormContainer>
  )
}

const BookFormContainer = styled.div``
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

export default BookForm
