import { useState } from "react";
import MenuItem from "./MenuItem";
import MenuCategories from "./MenuCategories";
const Menu = ({ data, isCategoryShow, setShowIndex }) => {
  const [showItemIndex, setShowItemIndex] = useState(0);
  const menuCard = data;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className=" inline-flex justify-between w-full bg-orange-400
                    p-4 border-2 text-lg transition-shadow font-bold rounded"
      >
        {menuCard?.card?.card?.title}
        {menuCard?.card?.card?.itemCards?.length > 0
          ? ` (${menuCard.card.card.itemCards.length}) `
          : ""}
        <span>🔻</span>
      </button>
      {isCategoryShow &&
        menuCard?.card?.card?.categories?.map((category, index) => (
          <MenuCategories
            key={category?.title}
            data={category}
            isShowItemIndex={index == showItemIndex ? true : false}
            setShowItemIndex={() => index == showItemIndex ? setShowItemIndex() : setShowItemIndex(index)}
          />
        ))}

      {isCategoryShow &&
        menuCard?.card?.card?.itemCards?.map((item) => (
          <MenuItem key={item.card.info.id} data={item} />
        ))}
    </div>
  );
};

export default Menu;
