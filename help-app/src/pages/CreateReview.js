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
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="restaurant">Restaurant:</label>
        <select
          className="form-box"
          onChange={handleChange}
          value={formState.restaurant_id}
          id="restaurant_id"
        >
          <option>- Select Restaurant -</option>
          <option value={1}>Nu Burger</option>
          <option value={2}>Atlantic Fish Company</option>
          <option value={3}>Legal Sea Foods</option>
          <option value={4}>Shaking Crab</option>
          <option value={5}>Union Oyster House</option>
          <option value={6}>The Salty Pig</option>
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
        <label htmlFor="rating">Rating:</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="number"
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
        <button className="form-box" type="submit">
          Post My Review!
        </button>
      </form>
    </div>
  )
}
export default CreateReview
