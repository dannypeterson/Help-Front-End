import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const CreateReview = () => {
  const [formState, setFormState] = useState(initialState)

  const initialState = {
    dish: '',
    description: '',
    rating: '',
    img: ''
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const completedReview = {
  //     ...formState
  //   }
  //   let res = await axios.post(`${BASE_URL}/feed`, completedReview)
  //   setFormState(initialState)
  // }

  return (
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
      ></textarea>
      <label htmlFor="rating">Rating:</label>
      <input
        onChange={handleChange}
        type="number"
        id="title"
        value={formState.title}
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
  )
}
export default CreateReview
