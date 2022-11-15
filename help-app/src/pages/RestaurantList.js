import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../services/api'
import Nav from '../components/Nav'
import Client from '../services/api'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    const res = await Client.get(`${BASE_URL}/restaurants`)
    console.log(res)
    setRestaurants(res.data)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div className="main">
      <Nav />
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <img src={restaurant.img} alt={restaurant.name} />
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.address}</h3>
          <h3>{restaurant.category}</h3>
        </div>
      ))}
    </div>
  )
}
export default RestaurantList
