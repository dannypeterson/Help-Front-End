import { useState } from 'react'
import { BASE_URL } from '../services/api'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

const CreateReview = ({ user }) => {
  let navigate = useNavigate()

  const initialState = {
    dish: '',
    description: '',
    rating: '',
    img: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const completedReview = {
      ...formState
    }
    let res = await Client.post(`${BASE_URL}/review/create`, completedReview)
    setFormState(initialState)
    navigate('/feed')
  }

  return user ? (
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
        <button type="submit">Post My Review!</button>
      </form>
    </div>
  ) : (
    <div>Sign In</div>
  )
}
export default CreateReview
