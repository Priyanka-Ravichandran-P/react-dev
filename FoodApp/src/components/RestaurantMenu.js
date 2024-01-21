import Shimmer from "./Shimmer";
import { useRestaurantsMenu } from "../hooks/RestroMenuHook";
import { useState } from "react";
import Menu from "./Menu";

const RestaurantMenu = () => {
  const [restaurantsMenu, restaurantInfo] = useRestaurantsMenu([]);
  const [showIndex, setShowIndex] = useState(0);
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
            return (
              <Menu
                data={menuCard}
                key={menuCard?.card?.card?.title}
                isCategoryShow={index == showIndex ? true : false}
                setShowIndex={() => {return (index != showIndex) ? setShowIndex(index) : setShowIndex(-1)}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
