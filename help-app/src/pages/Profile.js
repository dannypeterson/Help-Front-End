import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const Profile = () => {
  const [userReviews, setUserReviews] = useState()

  useEffect(() => {}, [])

  return (
    <div className="main">
      <Nav />
      <h1>Profile</h1>
    </div>
  )
}
export default Profile
