import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../actions/book'
import Logo from '../logo'
import url from '../../assets/edit.jpg'
import url1 from '../../assets/delete1.png'
import { IconButton } from '../texts'

const Books = () => {
  const bookListe = useSelector(state => state.book.list)
  const dispatch = useDispatch()
  return (
    <BookContainer>
      <StyledTable>
        <StyledThead>Auteur</StyledThead>
        <StyledThead>Intitulé livre</StyledThead>
        <StyledThead>Quantité</StyledThead>
        <StyledThead>Editer</StyledThead>
        <StyledThead>Supprimer</StyledThead>
        {bookListe.map(book =>
          book.id ? (
            <tr key={book.id}>
              <td>{book.value.author}</td>
              <td>{book.value.name}</td>
              <td>{book.value.quantity}</td>
              <td>
                <IconButton onClick={() => dispatch(deleteBook(book.id))}>
                  <Logo url={url} top='10px' width='1.5rem'></Logo>
                </IconButton>
              </td>
              <td>
                <IconButton onClick={() => dispatch(deleteBook(book.id))}>
                  <Logo url={url1} top='10px' width='1.5rem'></Logo>
                </IconButton>
              </td>
            </tr>
          ) : null
        )}
      </StyledTable>
    </BookContainer>
  )
}

const BookContainer = styled.div``

const StyledTable = styled.table`
  display: flex;
  padding: 20px;
  font-size: 14px;
  width: 740px;
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

const StyledThead = styled.th`
  justify-content: center;
  width: 25%;
`

export default Books
