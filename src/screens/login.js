import React from 'react'
import { Link } from 'react-router-dom'

const Login = props => {
  return (
    <div>
      <p>Login</p>
      <Link to='/home'>To Home</Link>
      <button onClick={() => props.history.push('/home')}>To Home</button>
    </div>
  )
}

export default Login
