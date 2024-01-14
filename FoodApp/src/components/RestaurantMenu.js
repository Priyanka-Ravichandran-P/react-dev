import { STAR_IMG_SRC } from "../utils/constant";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useRestaurantsMenu } from "../hooks/RestroMenuHook";

const RestaurantMenu = () => {
  const [restaurantsMenu, restaurantInfo] = useRestaurantsMenu([]);

  return restaurantsMenu.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="restaurant-info-card">
        <h2>{restaurantInfo.name}</h2>
      </div>
      <div className="restaurant-menu-card">
        {restaurantsMenu?.map((menu) => {
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
                  {menu?.imageId ? (
                    <img
                      className="restaurant-menu-image"
                      alt="Food"
                      src={CDN_URL + menu?.imageId}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>

                {menu?.ratings?.aggregatedRating?.rating ? (
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
