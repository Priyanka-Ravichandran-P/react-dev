import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL, STAR_IMG_SRC } from "../utils/constant";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaurantsMenu, setRestaurantsMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  let { id } = useParams();
  const fetchMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.933603494798213&lng=77.62448069999998&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    data = await data.json();
    let card =
      data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    let menuInfo = card.itemCards.map((item) => item.card.info);
    setRestaurantsMenu(menuInfo);
    let restroInfo = data.data.cards[0].card.card.info;
    setRestaurantInfo(restroInfo);
  };
  useEffect(() => {
    fetchMenu(); // Not an async function
  }, []); // We need to call useEffect only once after component re-loads. so passing []

  return restaurantsMenu.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="restaurant-info-card">
        <h2>{restaurantInfo.name}</h2>
      </div>
      <div className="restaurant-menu-card">
        {restaurantsMenu.map((menu) => {
          console.log(menu);
          return (
            <div className="restaurant-menu-info" key={menu.id}>
              <div className="restaurant-menu-left-info">
                <h3 className="restaurant-menu-name">{menu.name}</h3>
                <h4 className="restaurant-menu-price">{`₹ ${
                  menu.price / 100 || menu.defaultPrice / 100
                }`}</h4>
                <h5 className="restaurant-menu-desc">{menu.description}</h5>
              </div>
              <div className="restaurant-menu-right-info">
                <div>
                  <img
                    className="restaurant-menu-image"
                    alt="Food"
                    src={CDN_URL + menu.imageId}
                  />
                </div>

                {menu.ratings.aggregatedRating.rating ? (
                  <div className="restaurant-menu-rating">
                    <span>
                      <img
                        className="restaurant-menu-rating-image"
                        alt="Food"
                        src={STAR_IMG_SRC}
                      />
                    </span>
                    <span>{menu.ratings.aggregatedRating.rating}</span>
                  </div>
                ) : (
                  <h4></h4>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
