import MenuItem from "./MenuItem";

const MenuCategories = ({ data, isShowItemIndex, setShowItemIndex }) => {
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
          <MenuItem key={item.card.info.id} data={item} />
        ))}
    </div>
  );
};

export default MenuCategories;
