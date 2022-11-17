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
    <div className="restaurant-list-background">
      <Nav />
      <div className="restaurants-map">
        <h1 className="title">Restaurants</h1>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <div className="restaurant-card">
                <img
                  className="restaurant-list-image"
                  src={restaurant.img}
                  alt={restaurant.name}
                />
                <h2>{restaurant.name}</h2>
                <h3>{restaurant.address}</h3>
                <h3>{restaurant.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default RestaurantList
