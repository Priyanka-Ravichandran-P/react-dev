import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const MenuCategories = ({ data, isShowItemIndex, setShowItemIndex }) => {
  let menuItems = [];
  menuItems = useSelector((store) => store.cart.items);
  const fetchItems = () => {
    menuItems.map((obj) => obj.id);
  };
  fetchItems();
  const category = data;

  return (
    <div>
      <button
        onClick={() => {
          setShowItemIndex();
        }}
        className=" font-semibold inline-flex justify-between w-full text-lg border-b-4 border-b-orange-400 p-4 transition-shadow "
      >
        {category?.title}
        {category?.itemCards?.length > 0
          ? ` (${category?.itemCards.length}) `
          : ""}
        <span>🔻</span>
      </button>
      {isShowItemIndex &&
        category?.itemCards.map((item) => (
          <MenuItem
            key={item.card.info.id}
            data={item}
            isAddShow={
              menuItems.filter((obj) => obj.id === item.card.info.id).length > 0
                ? false
                : true
            }
          />
        ))}
    </div>
  );
};

export default MenuCategories;
