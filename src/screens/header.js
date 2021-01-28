import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Logo from '../components/logo'
import Logout from '../components/logout'
import url from '../assets/logo1.jpg'

const Header = () => {
  const history = useHistory()
  const [isToken, setToken] = useState(localStorage.getItem('token'))
  const onClick = () => {
    localStorage.removeItem('token')
    setToken(null)
    history.push('/')
  }

  return (
    <HeaderContainer>
      <div>
        <Link to='/home'>
          {' '}
          <Logo url={url} alt='Logo' width='40px'></Logo>{' '}
        </Link>
        <Link to='/home'>Accueil</Link>
        {isToken ? (
          <Logout handleClick={onClick}></Logout>
        ) : //Ne s'affiche qu'aprés refresh de la page (apres auth) malgrés le state comme je vous avais montré
        null}
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.secondary};
  min-height: 3rem;
  padding-top: 15px;
  padding-left: 15px;
  color: white;
`

export default Header
