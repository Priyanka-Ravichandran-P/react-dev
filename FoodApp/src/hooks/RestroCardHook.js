import { useState, useEffect } from "react";
import { API_ENDPOINT } from "../utils/constant";

export const useAllRestaurants = (defaultValue) => {
  const [restaurantCards, setRestaurantCards] = useState(defaultValue);
  const [filteredRestaurantCards, setFilteredRestaurantCards] =
    useState(defaultValue);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/" + API_ENDPOINT
    );

    let allRestaurants = await data.json();

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
