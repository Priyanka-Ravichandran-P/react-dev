import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { IMAGE_NOT_FOUND, STAR_IMG_SRC } from "../utils/constant";
import { useState } from "react";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux-store/slice/cartSlice";

const MenuItem = ({ data, isAddShow }) => {
  const info = data?.card?.info;
  const menuItems = useSelector((store) => store.cart.items);

  const [isAddBtnShow, setAddBtnShow] = useState(isAddShow);
  const dispatch = useDispatch();

  const decreaseItemQuantity = (info) => {
    const id = info?.id;
    menuItems.forEach((obj) => {
      if (obj.id == info.id && obj.quantity == 1) {
        setAddBtnShow(true);
      }
    });
    dispatch(decreaseQuantity(id));
  };
  const increaseItemQuantity = (info) => {
    const id = info?.id;

    dispatch(increaseQuantity(id));
  };

  const addItemToCart = (info) => {
    const item = {
      id: info.id,
      name: info.name,
      price: info.price / 100 || info.defaultPrice / 100,
      quantity: 1,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="p-4 flex justify-between">
      <div className="w-9/12 mr-2">
        <h3 className="font-bold text-md">{info.name}</h3>
        <h4 className="font-semibold text-md">{`₹ ${
          info.price / 100 || info.defaultPrice / 100
        }`}</h4>
        <h5 className="text-md text-gray-600">{info.description}</h5>
      </div>
      <div className="flex flex-col relative">
        <div className="rounded">
          <div className="relative">
            {info?.imageId ? (
              <img
                className="overflow-y-hidden size-36"
                alt="Food"
                src={CDN_URL + info?.imageId}
              />
            ) : (
              <img
                className="overflow-y-hidden size-36"
                alt="Food_NOT_FOUND"
                src={IMAGE_NOT_FOUND}
              />
            )}
            {isAddBtnShow ? (
              <button
                className="absolute w-12 align-middle bottom-0 right-12  ml-auto mr-auto
                              rounded-lg font-bold bg-black text-white"
                onClick={() => {
                  setAddBtnShow(false);
                  addItemToCart(info);
                }}
              >
                ADD
              </button>
            ) : (
              <div
                className="absolute w-30 bottom-0 right-7 ml-auto mr-auto flex flex-wrap 
                              rounded-lg font-bold bg-gray-600  text-white"
              >
                <button
                  className=" w-6 left-0  hover:text-red-600"
                  onClick={() => {
                    decreaseItemQuantity(info);
                  }}
                >
                  {" "}
                  -
                </button>
                <div className=" w-12 left-1/2 text-center hover:text-green-600">
                  {menuItems?.filter((obj) => obj.id == info.id)?.[0]?.quantity}
                </div>
                <button
                  className=" w-6 right-0  hover:text-green-600"
                  onClick={() => {
                    increaseItemQuantity(info);
                  }}
                >
                  {" "}
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {info?.ratings?.aggregatedRating?.rating ? (
          <div className="inline-flex justify-center p-2 m-1">
            <span>
              <img className="w-5 h-5" alt="Food" src={STAR_IMG_SRC} />
            </span>
            <span className="ml-1">{info.ratings.aggregatedRating.rating}</span>
          </div>
        ) : (
          <h4></h4>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
