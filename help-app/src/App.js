import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import CreateReview from './pages/CreateReview'
import Feed from './pages/Feed'
import SignUp from './pages/SignUp'
import RestaurantList from './pages/RestaurantList'
import Restaurant from './components/Restaurant'
import Logout from './pages/Logout'
import { useState } from 'react'
function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage setUser={setUser} />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/createreview" element={<CreateReview />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
