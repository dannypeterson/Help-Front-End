import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const LandingPage = ({ setUser }) => {
  const navigate = useNavigate()
  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [signInState, setSignInState] = useState(initialState)

  const [login, setLogin] = useState(false)

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

  const handleDemo = async (e) => {
    e.preventDefault()
    const payload = await SignInUser({
      username: 'bostonfoodie',
      email: 'bostonfoodie@gmail.com',
      password: 'lobster'
    })
    await setUser(payload)
    navigate('/feed')
  }

  return (
    <div className="landingpage">
      <h1>Welcome to Help!</h1>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/97/171/591/food-hamburgers-minimalism-wallpaper-preview.jpg"
        className="landing-logo"
        alt="logo"
      ></img>
      <h2>
        A Yelp-inspired app where users can share their reviews on popular meals
        in town!
      </h2>

      <form onSubmit={handleDemo}>
        <button className="demo-button">Demo User! (Recruiters)</button>
      </form>

      <br></br>

      <form className="signinform" onSubmit={handleSubmit}>
        <label className="login" htmlFor="username">
          Username:
        </label>
        <input
          required
          className="form-box"
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={signInState.username}
        />
        <br />
        <label className="login" htmlFor="email">
          Email:
        </label>
        <input
          required
          className="form-box"
          id="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={signInState.email}
        />
        <br />
        <label className="login" htmlFor="password">
          Password:
        </label>
        <input
          required
          className="form-box"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={signInState.password}
        />
        <br />

        <button
          className="login-button"
          disabled={!signInState.email || !signInState.password}
          type="submit"
          onClick={() => setLogin(true)}
        >
          Login!
        </button>
      </form>
      <p className="back-to-login" onClick={() => navigate('/signup')}>
        Don't have an account? Click here to sign up.
      </p>
    </div>
  )
}

export default LandingPage
