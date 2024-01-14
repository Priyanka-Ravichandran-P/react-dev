import RestroCard from "./RestroCard";
import FilterBtn from "./FilterBtn";
import SearchComponent from "./SearchComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useAllRestaurants } from "../hooks/RestroCardHook";

const Body = () => {
  const [restaurantCards, filteredRestaurantCards, setFilteredRestaurantCards] =
    useAllRestaurants();

  if (filteredRestaurantCards?.length == 0) return <Shimmer />;
  // Rendering on the basis of condition is called conditional rendering

  return (
    <div className="body">
      <div className="search">
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
      <div className="restaurant-card-container">
        {filteredRestaurantCards?.map((card) => (
          <div className="restro-cards" key={card.info.id}>
            <Link
              to={`/restaurant-menu/${card.info.id}`}
              className="restro-card-link"
            >
              <RestroCard data={card.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
