import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Nav from '../components/Nav'

const Profile = ({ user }) => {
  let navigate = useNavigate()

  const [userReviews, setUserReviews] = useState()
  const [profileName, setProfileName] = useState()
  const [restaurants, setRestaurants] = useState()

  const getReviews = async () => {
    let res = await Client.get(`${BASE_URL}/review/profile/${user.id}`)
    console.log(res.data)
    setUserReviews(res.data.reviews)
    setProfileName(res.data.username)
    let response = await Client.get(`${BASE_URL}/restaurants`)
    console.log(response.data)
    setRestaurants(response.data)
  }

  const deleteReview = async (e) => {
    const res = await Client.delete(`${BASE_URL}/review/delete/${e.target.id}`)
    getReviews()
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="main">
      <Nav />
      <div className="profile-info">
        <img
          className="profile-pic"
          alt=""
          src="../../assets/images/empty-pfp.png"
        ></img>
        <h1 className="profile-name">@{profileName}</h1>
      </div>
      <div className="profile-cards">
        {userReviews?.map((userReview) => (
          <div
            id={userReview.restaurant_id}
            key={userReview.id}
            className="review-card"
          >
            <div className="review-info">
              <h2 className="review-dish">{userReview.dish}</h2>
              <div className="review-image-buttons">
                <img
                  className="review-img-profile"
                  alt=""
                  src={userReview.img}
                ></img>
                <p className="description">{userReview.description}</p>
                <p className="rating">{userReview.rating}/10</p>
              </div>
              <div className="edit-buttons">
                <button
                  className="update-button"
                  id={userReview.id}
                  onClick={() => navigate(`/update/review/${userReview.id}`)}
                >
                  Update
                </button>
                <button
                  className="delete-button"
                  id={userReview.id}
                  onClick={deleteReview}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Profile
