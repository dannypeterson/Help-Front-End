import { useState } from 'react'
import { BASE_URL } from '../services/api'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const CreateReview = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()
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
    let res = await Client.post(
      `${BASE_URL}/review/create/${id}`,
      completedReview
    )
    setFormState(initialState)
    navigate('/feed')
  }

  return user ? (
    <div className="main">
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="restaurant">Restaurant:</label>
        <select>
          <option value="NuBurger">Nu Burger</option>
          <option value="Atlantic Fish Company">Atlantic Fish Company</option>
          <option value="Legal Sea Foods">Legal Sea Foods</option>
          <option value="Shaking Crab">Shaking Crab</option>
          <option value="Union Oyster House">Union Oyster House</option>
          <option value="The Salty Pig">The Salty Pig</option>
          <option value="Umami Omaskse">Umami Omaskse</option>
          <option value="Wen's Yunnan Noodle and Ramen">
            Wens Yunnan Noodle and Ramen
          </option>
          <option value="Shake Shack">Shake Shack</option>
          <option value="Krasi">Krasi</option>
        </select>
        {/* onChange={handleChange}
          type="text"
          id="restaurant"
          value={formState.restaurant_id}
        /> */}
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
