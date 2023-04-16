import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from '../assets/storyblocks-icon.svg'
const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between items-center m-2 ">
      <div>
        <img
          className="h-10 w-18 "
          src={Logo}
          alt="logo"
        />
      </div>

      <ul className=" flex space-x-6 ">
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold">
          <Link to="/about">About</Link>
        </li>
        <li className="font-bold">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="font-bold">Cart</li>
        <li>
          <Link className="font-bold" to="/instamart">Instamart</Link>
        </li>
      </ul>
      <div>
        {isOnline ? "✅" : "🔴"}
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
