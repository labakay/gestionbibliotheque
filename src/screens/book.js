import React from 'react'
import styled from 'styled-components'
import BookForm from '../components/bookForm'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../actions/book'

const Book = () => {
  const bookListe = useSelector(state => state.book.list)
  const dispatch = useDispatch()
  return (
    <>
      <BookForm></BookForm>
      <BookContainer>
        <h1>Liste des livres</h1>
        <StyledTable>
          <th>Auteur</th>
          <th>Intitulé livre</th>
          <th>Editer</th>
          <th>Supprimer</th>
          {bookListe.map(book => (
            <tr key={book.id}>
              <td>{book.value.author}</td>
              <td>{book.value.name}</td>
              <td>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Editer
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </StyledTable>
      </BookContainer>
    </>
  )
}

const BookContainer = styled.div`
  text-align: center;
  color: green;
`

const StyledTable = styled.table`
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

export default Book
