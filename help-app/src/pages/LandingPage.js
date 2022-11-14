import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'

const LandingPage = ({ setUser }) => {
  const navigate = useNavigate()

  const [login, setLogin] = useState(false)

  return (
    <div>
      <h1>Welcome to Help!</h1>
      <h2>
        A Yelp-inspired social media app where users can upload an image of the
        meal they just ate and recommend it to their friends!
      </h2>
      <h3>"It's almost like Yelp and Facebook had a baby!" - Mac</h3>
      <button onClick={() => setLogin(true)}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign up</button>
      {login && <Login setUser={setUser} />}
    </div>
  )
}
export default LandingPage
