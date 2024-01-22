import { useContext } from "react";
import UserContext from "../utils/UserContext";
const ContactUS = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      <div className="text-orange-700 m-auto p-4 text-end justify-end text-lg font-semibold">
        <p> LoggedIn User: {loggedInUser} 👋</p>
      </div>
      <div className="text-center text-violet-700 font-serif font-semibold text-xl p-4 ">
        <h2> Please Contact Our Support Team! Appretiating Your Patience!</h2>
      </div>
    </div>
  );
};

export default ContactUS;
