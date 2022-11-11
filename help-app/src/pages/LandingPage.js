import { useNavigate, Route, Routes, Link } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const redirectToSignUp = () => {
    navigate('/signup')
  }

  return (
    <div>
      <h1>Welcome to Help!</h1>
      <h2>
        A Yelp-inspired social media app where users can upload an image of the
        meal they just ate and recommend it to their friends!
      </h2>
      <h3>"It's almost like Yelp and Facebook had a baby!" - Mac</h3>
      <button>Login</button>
      <button onClick={redirectToSignUp}>Sign up</button>
    </div>
  )
}
export default LandingPage
