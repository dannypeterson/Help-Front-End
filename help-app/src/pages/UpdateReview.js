import Nav from '../components/Nav'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateReview = ({ user, formState, setFormState, initialState }) => {
  let navigate = useNavigate()

  let { id } = useParams()

  const getReviewById = async () => {
    let response = await Client.get(`${BASE_URL}/review/update/${id}`)
    console.log(response.data)
    setFormState(response.data)
  }

  useEffect(() => {
    getReviewById()
  }, [])

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const completedReview = {
      ...formState
    }
    let res = await Client.put(
      `${BASE_URL}/review/update/${id}`,
      completedReview
    )
    setFormState(initialState)
    navigate('/profile')
  }

  return (
    <div className="main">
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="dish">Dish:</label>
        <input
          onChange={handleChange}
          type="text"
          id="dish"
          value={formState.dish}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          onChange={handleChange}
          value={formState.description}
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="rating">Rating:</label>
        <input
          onChange={handleChange}
          type="number"
          id="rating"
          value={formState.rating}
        />
        <label htmlFor="img">Post Your Image</label>
        <input
          onChange={handleChange}
          type="text"
          id="img"
          value={formState.img}
        />
        <button type="submit">Update Review</button>
      </form>
    </div>
  )
}

export default UpdateReview
