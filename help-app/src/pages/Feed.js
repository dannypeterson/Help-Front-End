import axios from 'axios'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import { BASE_URL } from '../services/api'

const Feed = () => {
  const [reviews, setReviews] = useState()

  const getReviews = async () => {
    const res = await axios.get(`${BASE_URL}/reviews`)
    console.log(res)
    setReviews(res.data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
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
  )
}
export default Feed
