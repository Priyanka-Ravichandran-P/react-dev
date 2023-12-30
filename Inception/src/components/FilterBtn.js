const FilterBtn = (props) => {
    return (       
        <button className="filter-btn" onClick={props?.onClick}>
          Filter Top 10 Restaurants
        </button>
    );
  };
  
  export default FilterBtn;