import { useState } from "react";

const SearchComponent = (props) => {
  const [searchValue, setSearchValue] = useState("");
  let { restaurantCards, setFilteredRestaurantCards } = props?.data;
  return (
    <div className="flex flex-wrap justify-end">
      <input
        className="border-solid border-orange-400 border-[0.19rem] rounded-sm"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        className="bg-orange-400 h-7 text-lg leading-none px-1 mx-1 rounded-sm"
        onClick={() => {
          setFilteredRestaurantCards(
            restaurantCards.filter((obj) =>
              obj.info.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        }}
      >
        search
      </button>

      <button
        className="bg-orange-400 h-7 text-lg leading-none px-1 mx-1 rounded-sm"
        onClick={() => {
          setFilteredRestaurantCards(restaurantCards);
          setSearchValue("");
        }}
      >
        clear
      </button>
    </div>
  );
};

export default SearchComponent;
