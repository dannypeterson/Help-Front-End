import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const Feed = ({ user }) => {
  const navigate = useNavigate()
  const [reviews, setReviews] = useState()

  const getReviews = async () => {
    const res = await Client.get(`${BASE_URL}/review`)
    setReviews(res.data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return user ? (
    <div className="main">
      <Nav />

      <div className="reviews">
        {reviews?.map((review) => (
          <div key={review.id} className="review-wrapper">
            <div className="info">
              <div className="user">
                <h4 className="username">@{review.reviewer.username}</h4>
                <div className="location-wrapper">
                  <p className="location">{review.reviews.name}</p>
                  <img
                    className="location-img"
                    src="../../assets/images/location.png"
                  ></img>
                </div>
              </div>
            </div>
            <img className="review-img" src={review.img} alt=""></img>
            <div className="review-content">
              <h4 className="dish">{review.dish}</h4>
              <p className="description">{review.description}</p>
              <p className="rating">{review.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default Feed
