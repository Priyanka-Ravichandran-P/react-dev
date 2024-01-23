import { LOGO_URL, CART_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/OnlineStatusHook";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOnline] = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border border-black bg-yellow-300 align-middle">
      <div className="w-28">
        <img id="food-app-logo" alt="Logo" src={LOGO_URL} />
      </div>
      <ul className="flex mt-10 mr-2 text-xl leading-none font-serif flex-row justify-center">
        <li className="p-2 inline-flex">
          {isOnline ? (
            <div className="flex flex-row">
              <div className="h-4 w-4 bg-green-700 rounded-full"></div>
              <p className="ml-1">Online</p>
            </div>
          ) : (
            <div className="flex flex-row">
              <div className="h-4 w-4 bg-red-700 rounded-full"></div>
              <p className="ml-1">Offline</p>
            </div>
          )}
        </li>
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-2">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="p-2">
          <Link to="/profile"> Profile</Link>
        </li>
        <li className="p-2">
          <Link to="/cart">
            <svg className="flex-1 w-8 h-8 fill-current" viewBox="1 1 26 26">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="absolute right-3 top-[2.4rem] rounded-full bg-orange-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
