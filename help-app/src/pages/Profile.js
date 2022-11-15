import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Nav from '../components/Nav'

const Profile = ({ user }) => {
  let navigate = useNavigate()

  const [userReviews, setUserReviews] = useState()

  const getReviews = async () => {
    let res = await Client.get(`${BASE_URL}/review/profile/${user.id}`)
    setUserReviews(res.data.reviews)
  }

  const deleteReview = async (e) => {
    const res = await Client.delete(`${BASE_URL}/review/delete/${e.target.id}`)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="main">
      <Nav />
      <h1>Profile</h1>
      {userReviews?.map((userReview) => (
        <h2 key={userReview.id}>
          {userReview.dish}
          <button
            id={userReview.id}
            onClick={() => navigate(`/update/review/${userReview.id}`)}
          >
            Update
          </button>
          <button id={userReview.id} onClick={deleteReview}>
            Delete
          </button>
        </h2>
      ))}
    </div>
  )
}
export default Profile
