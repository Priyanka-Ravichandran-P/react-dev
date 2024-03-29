import Shimmer from "./Shimmer";
import { useRestaurantsMenu } from "../hooks/RestroMenuHook";
import { useState } from "react";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  addRestaurantInfo,
  removeRestaurantInfo,
} from "../redux-store/slice/cartSlice";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [restaurantsMenu, restaurantInfo] = useRestaurantsMenu([]);
  const [showIndex, setShowIndex] = useState(0);

  dispatch(
    addRestaurantInfo({
      name: restaurantInfo.name,
      logo: restaurantInfo.cloudinaryImageId,
      address: restaurantInfo.city,
    })
  );

  return restaurantsMenu.length == 0 ? (
    <Shimmer />
  ) : (
    <div className=" bg-yellow-200">
      <div className="p-6 flex flex-col  w-1/2 ml-auto mr-auto align-middle">
        <div className="font-bold text-xl">
          <h2 className="flex flex-wrap justify-center">
            {restaurantInfo.name}
          </h2>
        </div>
        <div className="flex flex-col my-8">
          {restaurantsMenu?.map((menuCard, index) => {
            return menuCard?.card?.card?.carousel ? null : (
              <Menu
                data={menuCard}
                key={menuCard?.card?.card?.title}
                isCategoryShow={index == showIndex ? true : false}
                setShowIndex={() => {
                  return index != showIndex
                    ? setShowIndex(index)
                    : setShowIndex(-1);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
