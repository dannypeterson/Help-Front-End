import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const Profile = () => {
  const [userReviews, setUserReviews] = useState()
  let { id } = useParams()

  const getReviews = async () => {
    let res = await Client.get(`${BASE_URL}/review/profile/${id}`)
    console.log(res)
  }

  useEffect(() => {}, [])

  return (
    <div className="main">
      <Nav />
      <h1>Profile</h1>
      <li></li>
    </div>
  )
}
export default Profile
