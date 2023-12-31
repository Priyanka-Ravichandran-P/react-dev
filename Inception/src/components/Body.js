import RestroCard from "./RestroCard";
import { RESTAURANT_DATA } from "../utils/mockData";
import FilterBtn from "./FilterBtn";
import SearchComponent from "./SearchComponent"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {API_ENDPOINT} from '../utils/constant';

const Body = () => {
//   let allRestaurants = RESTAURANT_DATA.data.cards.filter((obj) => obj.cardType == "seeAllRestaurants" )[0].data.data.cards;
  let [restaurantCards, setRestaurantCards] = useState([]);
  let [filteredRestaurantCards, setFilteredRestaurantCards] = useState([]);
 
  const fetchData = async() => {
    let data = await fetch(API_ENDPOINT);
    let allRestaurants = await data.json();
    // Optional Chaining
    allRestaurants = allRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantCards(allRestaurants);
    setFilteredRestaurantCards(allRestaurants);
  }

  useEffect(()=>{
    fetchData();
  }, []);

  // Rendering on the basis of condition is called conditional rendering

  return filteredRestaurantCards.length == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="search">
      <FilterBtn onClick={  () => {
              setFilteredRestaurantCards(restaurantCards.filter(obj=> obj.info.avgRating >4.3));
        }}/>
        <SearchComponent data = {{restaurantCards, setFilteredRestaurantCards}}/>
      </div>
      <div className="restaurant-card-container">
        {filteredRestaurantCards.map((card) => (
            <RestroCard key={card.info.id} data={card.info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
