import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../utils/constant";

export const useAllRestaurants = (defaultValue) => {
  const [restaurantCards, setRestaurantCards] = useState(defaultValue);
  const [filteredRestaurantCards, setFilteredRestaurantCards] = useState(defaultValue);

  const fetchData = async () => {
    let data = await fetch(API_ENDPOINT);
    let allRestaurants = await data.json();
    // Optional Chaining
    allRestaurants =
      allRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantCards(allRestaurants);
    setFilteredRestaurantCards(allRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [restaurantCards, filteredRestaurantCards, setFilteredRestaurantCards];
};
