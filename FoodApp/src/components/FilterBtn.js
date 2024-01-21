const FilterBtn = (props) => {
    return (       
        <button className="bg-orange-400 h-7 text-lg leading-none mx-1 px-1 border-spacing-2 rounded-sm " onClick={props?.onClick}>
          Filter Top Restaurants
        </button>
    );
  };
  
  export default FilterBtn;