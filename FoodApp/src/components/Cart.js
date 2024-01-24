import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CART } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restaurantDetails = useSelector((store)=>store.restaurantDetails.restaurantInfo);

  return cartItems.length == 0 ? (
    <EmptyCart />
  ) : (
    <div>
      <div className="font-bold text-xl">
        <h2 className="flex flex-wrap justify-center">{restaurantDetails.name}</h2>
      </div>
      <div className="p-6 flex flex-row w-3/12 ml-auto mr-auto justify-between">
        <p></p>
        <button></button>
        <p></p>
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="p-6 flex flex-col w-1/2 ml-auto mr-auto align-middle">
      <div className="flex flex-wrap justify-center"></div>
      <div className="contents text-center ml-auto mr-auto w-full p-4 text-orange-700 font-bold text-lg">
        <img
          className=" ml-auto mr-auto justify-center rounded-sm"
          src={EMPTY_CART}
          alt="Empty Cart"
        />
        <h2>Your Cart Is Empty!</h2>
      </div>
    </div>
  );
};
export default Cart;
