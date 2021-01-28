import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <h1>Bienvenue dans ma bibliothèque en ligne</h1>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  text-align: center;
  color: green;
`

export default Home
