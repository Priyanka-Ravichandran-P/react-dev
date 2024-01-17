import { LOGO_URL, CART_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/OnlineStatusHook";

const Header = () => {
  const [isOnline] = useOnlineStatus();
  return (
    <div className="flex justify-between border border-black bg-yellow-300">
      <div className="w-28">
        <img id="food-app-logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex text-xl font-serif flex-row justify-center">
          <li className="p-2">
            {isOnline ? (
              <div className="h-4 w-4 bg-green-700 rounded-full"></div>
            ) : (
              <div className="h-4 w-4 bg-red-700 rounded-full"></div>
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
    </div>
  );
};

export default Header;
