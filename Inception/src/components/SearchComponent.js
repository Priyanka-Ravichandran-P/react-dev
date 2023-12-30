import { useState } from "react";

const SearchComponent = (props) => {
  const [searchValue, setSearchValue] = useState("");
  let { restaurantCards, setFilteredRestaurantCards } = props?.data;
  return (
    <div className="search-container">
      <input
        className="search-text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          setFilteredRestaurantCards(restaurantCards.filter((obj) =>
          obj.info.name.toLowerCase().includes(searchValue.toLowerCase())
        ));
        }}>
      
        search
      </button>
    </div>
  );
};

export default SearchComponent;
