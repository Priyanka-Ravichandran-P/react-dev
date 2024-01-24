import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CART } from "../utils/constant";
import { CDN_URL } from "../utils/constant";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux-store/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const totalCartItems = cartItems.totalCartItems;
  const items = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurantInfo);
  const dispatch = useDispatch();

  const decreaseItemQuantity = (info) => {
    const id = info?.id;
    dispatch(decreaseQuantity(id));
  };
  const increaseItemQuantity = (info) => {
    const id = info?.id;
    dispatch(increaseQuantity(id));
  };
  return totalCartItems === 0 ? (
    <EmptyCart />
  ) : (
    <div className="p-6 m-4 flex flex-col w-4/12 ml-auto mr-auto">
      <div className="flex flex-row ml-auto mr-auto">
        <img
          className="size-16 rounded-md m-4"
          alt="Food"
          src={CDN_URL + restaurant.logo}
        />
        <div className="flex flex-col justify-start m-2">
          <h2 className="font-semibold text-orange-700">{restaurant.name}</h2>
          <h5>{restaurant.address}</h5>
        </div>
      </div>
      {items.map((item) => {
        return (
          <div
            className="p-6 flex flex-row justify-between border-b-2 border-orange-600"
            key={item.name}
          >
            <h5 className="w-1/2">{item.name}</h5>

            <div
              className=" w-30 flex flex-row
                                  rounded-lg font-bold bg-gray-600  text-white"
            >
              <button
                className=" w-6  hover:text-red-600"
                onClick={() => {
                  decreaseItemQuantity(item);
                }}
              >
                {" "}
                -
              </button>
              <div className=" w-12 text-center hover:text-green-600">
                {item.quantity}
              </div>
              <button
                className=" w-6 hover:text-green-600"
                onClick={() => {
                  increaseItemQuantity(item);
                }}
              >
                {" "}
                +
              </button>
            </div>

            <div className="font-semibold">
              {(item.price / 100) * item.quantity}
            </div>
          </div>
        );
      })}
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
