import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Logout from './pages/Logout'
import CreateReview from './pages/CreateReview'
import Feed from './pages/Feed'
import SignUp from './pages/SignUp'
import RestaurantList from './pages/RestaurantList'
import { CheckSession } from './services/Auth'
import Profile from './pages/Profile'
import { useState, useEffect } from 'react'
import UpdateReview from './pages/UpdateReview'

function App() {
  const [user, setUser] = useState(null)

  const initialState = {
    restaurant_id: '',
    dish: '',
    description: '',
    rating: '',
    img: ''
  }
  const [formState, setFormState] = useState(initialState)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)

    localStorage.clear()
  }

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage setUser={setUser} />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route
            path="/createreview"
            element={
              <CreateReview
                user={user}
                initialState={initialState}
                formState={formState}
                setFormState={setFormState}
              />
            }
          />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route
            path="/update/review/:id"
            element={
              <UpdateReview
                user={user}
                formState={formState}
                setFormState={setFormState}
                initialState={initialState}
              />
            }
          />
          <Route
            path="/logout"
            element={<Logout handleLogOut={handleLogOut} setUser={setUser} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
