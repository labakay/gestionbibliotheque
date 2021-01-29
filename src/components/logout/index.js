import React from 'react'
import styled from 'styled-components'

const Logout = ({ handleClick }) => {
  return <LogoutButton onClick={handleClick}>Logout</LogoutButton>
}

const LogoutButton = styled.button`
  display: flex;
  font-size: 1em;
  margin-right: 1em;
  margin-top: 4%;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  color: red;
  background-color: transparent;
  float: right;
  &:hover {
    background-color: white;
  }
`

export default Logout
