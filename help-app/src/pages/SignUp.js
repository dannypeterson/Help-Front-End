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

  // const resetPassword = {
  //   password: '',
  //   confirmPassword: ''
  // }

  const [signUpState, setSignUpState] = useState(initialState)
  //const [passwordState, setPasswordState] = useState(resetPassword)

  const handleChange = (e) => {
    setSignUpState({ ...signUpState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (signUpState.password !== signUpState.confirmPassword) {
      alert('Passwords must match!')
      setSignUpState(initialState)
      return
    } else {
      await SignUpUser({
        username: signUpState.username,
        email: signUpState.email,
        password: signUpState.password
      })
      console.log(signUpState)

      setSignUpState(initialState)
      navigate('/')
    }
  }

  return (
    <div>
      <header className="signup-header">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/97/171/591/food-hamburgers-minimalism-wallpaper-preview.jpg"
          alt="logo"
          height="200px"
        ></img>
        <h1>Welcome to Help!</h1>
      </header>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className="form-box"
          id="username"
          type="text"
          placeholder="enter your username"
          onChange={handleChange}
          value={signUpState.username}
        />
        <br />
        <label htmlFor="username">Email:</label>
        <input
          className="form-box"
          id="email"
          type="text"
          placeholder="enter your email"
          onChange={handleChange}
          value={signUpState.email}
        />
        <br />
        <label htmlFor="username">Password:</label>
        <input
          className="form-box"
          id="password"
          type="password"
          placeholder="create your password"
          onChange={handleChange}
          value={signUpState.password}
        />
        <br />

        <label htmlFor="username">Confirm password:</label>
        <input
          className="form-box"
          id="confirmPassword"
          type="password"
          placeholder="confirm your password"
          onChange={handleChange}
          value={signUpState.confirmPassword}
        />
        <br />
        <button className="form-box" type="submit">
          Sign up!
        </button>
      </form>
    </div>
  )
}

export default SignUp
