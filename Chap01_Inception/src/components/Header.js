import { useState } from "react";

const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/126/52/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
