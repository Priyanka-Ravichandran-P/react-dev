import { useState } from "react";
import { LOGO_URL, CART_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [buttonName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img id="food-app-logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                buttonName == "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {buttonName}
            </button>
          </li>
          <li>
            <img className="cart" alt="Food cart" src={CART_URL} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
