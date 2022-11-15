import { SignInUser } from '../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const navigate = useNavigate()
  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [signInState, setSignInState] = useState(initialState)

  const handleChange = (e) => {
    setSignInState({ ...signInState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignInUser({
      username: signInState.username,
      email: signInState.email,
      password: signInState.password
    })
    const payload = await SignInUser(signInState)
    setUser(payload)

    setSignInState(initialState)
    navigate('/feed')
  }

  return (
    <form className="signinform" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        placeholder="enter your username"
        onChange={handleChange}
        value={signInState.username}
      />
      <br />
      <label htmlFor="username">Email:</label>
      <input
        id="email"
        type="text"
        placeholder="enter your email"
        onChange={handleChange}
        value={signInState.email}
      />
      <br />
      <label htmlFor="username">Password:</label>
      <input
        id="password"
        type="text"
        placeholder="create your password"
        onChange={handleChange}
        value={signInState.password}
      />
      <br />

      <button type="submit">Sign in!</button>
    </form>
  )
}

export default Login
