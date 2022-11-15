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
          <div key={review.id}>
            <h3>{review.userId}</h3>
            <h2>{review.dish}</h2>
            <h3>from {review.restaurantId}</h3>
            <img src={review.img} alt=""></img>
            <p>{review.description}</p>
            <h3>Rating: {review.rating}/5</h3>
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
