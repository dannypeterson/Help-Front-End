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
      </header>
      <h1>Welcome to Help!</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          required
          className="form-box"
          id="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={signUpState.username}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          required
          className="form-box"
          id="email"
          type="text"
          placeholder="email"
          onChange={handleChange}
          value={signUpState.email}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          required
          className="form-box"
          id="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={signUpState.password}
        />
        <br />

        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          required
          className="form-box"
          id="confirmPassword"
          type="password"
          placeholder="confirm password"
          onChange={handleChange}
          value={signUpState.confirmPassword}
        />
        <br />
        <button className="login-button" type="submit">
          Sign up!
        </button>
        <div className="back-to-login">
          <p onClick={() => navigate('/')}>Back to login</p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
