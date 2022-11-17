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

  return (
    <div className="landingpage">
      <h1>Welcome to Help!</h1>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/97/171/591/food-hamburgers-minimalism-wallpaper-preview.jpg"
        className="logo"
        alt="logo"
      ></img>
      <h2>
        A Yelp-inspired app where users can upload an image of the meal they
        just ate and recommend it to their friends!
      </h2>
      {/* <button onClick={() => setLogin(true)}>Login</button> */}

      <form className="signinform" onSubmit={handleSubmit}>
        <label className="login" htmlFor="username">
          Username:
        </label>
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
          type="password"
          placeholder="create your password"
          onChange={handleChange}
          value={signInState.password}
        />
        <br />

        <button
          disabled={!signInState.email || !signInState.password}
          type="submit"
          onClick={() => setLogin(true)}
        >
          Sign in!
        </button>
      </form>
      {/* login && <Login setUser={setUser} /> */}
      <label>Don't have an account?</label>
      <br />

      <button onClick={() => navigate('/signup')}>Sign up</button>
    </div>
  )
}

export default LandingPage
