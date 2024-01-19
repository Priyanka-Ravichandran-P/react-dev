import RestroCard, {isRestroOpen} from "./RestroCard";
import FilterBtn from "./FilterBtn";
import SearchComponent from "./SearchComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useAllRestaurants } from "../hooks/RestroCardHook";

const Body = () => {
  const [restaurantCards, filteredRestaurantCards, setFilteredRestaurantCards] =
  useAllRestaurants();
  const OpenLabelRestroCards = isRestroOpen(RestroCard);
  if (filteredRestaurantCards?.length == 0) return <Shimmer />;
  // Rendering on the basis of condition is called conditional rendering

  return (
    <div className=" bg-yellow-200">
      <div className="flex justify-end items-end p-2">
        <FilterBtn
          onClick={() => {
            setFilteredRestaurantCards(
              restaurantCards?.filter((obj) => obj.info.avgRating > 4.3)
            );
          }}
        />
        <SearchComponent
          data={{ restaurantCards, setFilteredRestaurantCards }}
        />
      </div>
      <div className="flex flex-wrap w-full m-4">
        {filteredRestaurantCards?.map((card) => (
          <div className="w-[18%] bg-orange-400 m-3 border-8  rounded-sm p-1 hover:border-teal-500 transition-transform duration-300 ease-in-out transform hover:scale-105" key={card.info.id}>
            <Link
              to={`/restaurant-menu/${card.info.id}`}
              className="restro-card-link"
            >
              {card?.info?.isOpen ? <OpenLabelRestroCards data={card.info}/> : <RestroCard data={card.info} />}
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
