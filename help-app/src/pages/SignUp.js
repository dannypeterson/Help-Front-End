import React, { useState, useNavigate } from 'react'

const SignUp = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something with the data in the component state
    console.log(signUpState)
    // clear the form
    setSignUpState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        placeholder="enter your username"
        onChange={handleChange}
        value={signUpState.username}
      />
      <label htmlFor="username">Email:</label>
      <input
        id="email"
        type="text"
        placeholder="enter your email"
        onChange={handleChange}
        value={signUpState.email}
      />
      <label htmlFor="username">Password:</label>
      <input
        id="password"
        type="text"
        placeholder="create your password"
        onChange={handleChange}
        value={signUpState.password}
      />

      <label htmlFor="username">Confirm password:</label>
      <input
        id="confirmPassword"
        type="text"
        placeholder="confirm your password"
        onChange={handleChange}
        value={signUpState.confirmPassword}
      />
      <button type="submit">Sign up!</button>
    </form>
  )
}

export default SignUp
