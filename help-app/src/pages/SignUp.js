import React, { useState } from 'react'
import { SignUpUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [signUpState, setSignUpState] = useState(initialState)

  const handleChange = (e) => {
    setSignUpState({ ...signUpState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignUpUser({
      username: signUpState.username,
      email: signUpState.email,
      password: signUpState.password
    })
    console.log(signUpState)

    setSignUpState(initialState)
    navigate('/')
  }

  return (
    <form className="signupform" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        placeholder="enter your username"
        onChange={handleChange}
        value={signUpState.username}
      />
      <br />
      <label htmlFor="username">Email:</label>
      <input
        id="email"
        type="text"
        placeholder="enter your email"
        onChange={handleChange}
        value={signUpState.email}
      />
      <br />
      <label htmlFor="username">Password:</label>
      <input
        id="password"
        type="text"
        placeholder="create your password"
        onChange={handleChange}
        value={signUpState.password}
      />
      <br />

      <label htmlFor="username">Confirm password:</label>
      <input
        id="confirmPassword"
        type="text"
        placeholder="confirm your password"
        onChange={handleChange}
        value={signUpState.confirmPassword}
      />
      <br />
      <button type="submit">Sign up!</button>
    </form>
  )
}

export default SignUp
