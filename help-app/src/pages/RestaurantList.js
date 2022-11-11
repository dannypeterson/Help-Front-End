import axios from 'axios'
import {useState, useEffect} from 'react'
import { BASE_URL } from '../services/api'


const RestaurantList = () => {
  const [restaurants, setRestaurants]= useState([])

  const getRestaurants= async ()=>{
    const res= await axios.get(`${BASE_URL}/restaurants`)
    setRestaurants(res.)ata.restaurants
  }


  useEffect(()=>{
  getRestaurants()
  }, [])
  return 
    div>R
      {restaurants.map((restaurant)=>(
        <div key={restaurant._id}>
          <img src={restaurant.image} alt={restaurant.name}/>
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.address}</h3>
          <h3>{restaurant.category}</h3>
          </div>
      ))}
    </div>
}
export default RestaurantList
