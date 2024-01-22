import { LOGO_URL, CART_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/OnlineStatusHook";

const Header = () => {
  const [isOnline] = useOnlineStatus();
  return (
    <div className="flex justify-between border border-black bg-yellow-300 align-middle">
      <div className="w-28">
        <img id="food-app-logo" alt="Logo" src={LOGO_URL} />
      </div>
      <ul className="flex mt-10 text-xl leading-none font-serif flex-row justify-center">
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
          <img className="w-12" alt="Food cart" src={CART_URL} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
