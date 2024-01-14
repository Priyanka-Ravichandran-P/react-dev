import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useRestaurantsMenu = (value) => {
  const [restaurantsMenu, setRestaurantsMenu] = useState(value);
  const [restaurantInfo, setRestaurantInfo] = useState(value);
  let { id } = useParams();

  const fetchMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.933603494798213&lng=77.62448069999998&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    data = await data.json();

    let categories = data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // let menuInfo = categories?.map((category) =>
    //   category.itemCards.map((item) => item.card.info)
    // );
    let menuInfo = categories.itemCards.map((item) => item.card.info)
    let restroInfo = data.data.cards[0].card.card.info;
    setRestaurantsMenu(menuInfo);
    setRestaurantInfo(restroInfo);
  };

  useEffect(() => {
    fetchMenu(); // Not an async function
  }, []); // We need to call useEffect only once after component re-loads. so passing []

  return [restaurantsMenu, restaurantInfo];
};
