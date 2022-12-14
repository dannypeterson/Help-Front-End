import { useState } from 'react'
import { BASE_URL } from '../services/api'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const CreateReview = ({ user, initialState, formState, setFormState }) => {
  let navigate = useNavigate()

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
    let res = await Client.post(
      `${BASE_URL}/review/create/${user.id}`,
      completedReview
    )
    setFormState(initialState)
    navigate('/feed')
  }

  return (
    <div className="main">
      <Nav />
      <h1 className="title">Create a review!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="restaurant">Restaurant:</label>
        <select
          className="form-box"
          onChange={handleChange}
          value={formState.restaurant_id}
          id="restaurant_id"
        >
          <option>- Select Restaurant -</option>
          <option value={1}>Atlantic Fish Company</option>
          <option value={2}>The Salty Pig</option>
          <option value={3}>Nu Burger</option>
          <option value={4}>Legal Sea Foods</option>
          <option value={5}>Shaking Crab</option>
          <option value={6}>Union Oyster House</option>
          <option value={7}>Umami Omaskse</option>
          <option value={8}>Wen's Yunnan Noodle and Ramen</option>
          <option value={9}>Shake Shack</option>
          <option value={10}>Krasi</option>
        </select>

        <label htmlFor="dish">Dish:</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="dish"
          value={formState.dish}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-box"
          onChange={handleChange}
          value={formState.description}
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="rating">Rating ( /10):</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="number"
          min="0"
          max="10"
          id="rating"
          value={formState.rating}
        />
        <label htmlFor="img">Image (url):</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="img"
          value={formState.img}
        />
        <button className="post-review" type="submit">
          Post My Review!
        </button>
      </form>
    </div>
  )
}
export default CreateReview
