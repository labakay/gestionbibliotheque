import React, { useState } from 'react'
import Books from '../components/book'
import BookForm from '../components/bookForm'
import { Title, IconButton } from '../components/texts'

import Logo from '../components/logo'
import url from '../assets/add.png'

const Book = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(true)
  }
  return (
    <>
      {visible ? <BookForm></BookForm> : ''}

      <>
        <Title>
          Liste des livres{' '}
          <IconButton onClick={handleClick}>
            <Logo url={url} width='40px' top='5px'></Logo>
          </IconButton>
        </Title>

        <Books></Books>
      </>
    </>
  )
}

export default Book
