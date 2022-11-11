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
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/createreview" element={<CreateReview />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
