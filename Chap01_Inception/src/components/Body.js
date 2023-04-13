import React, { useState, useEffect } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterDataOnClick } from "../utils/helper";
import { FETCH_RESTAURANT } from "../utils/constant";
import useOnline from "../utils/useOnline";
const Body = () => {
  /*diff ways of writing hooks(array destructuring)
     const [list, setList] = arr;
  const list = arr[0];
  const setList = arr[1];
  */

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getRestaurants = async () => {
    try {
      const response = await fetch(FETCH_RESTAURANT);

      const json = await response.json();
      //optional chaining
      const data = json?.data?.cards[2]?.data?.data?.cards;
      console.log(data);
      setRestaurantList(data);
      setFilteredRestaurantList(data);
    } catch (error) {
      throw error;
    }
  };
  console.log("render");

  useEffect(() => {
    getRestaurants();
    console.log("use effect called");
  }, []);

  const isOnline = useOnline();
  console.log(isOnline);

  if (!isOnline) {
    return <h1>🔴 Offline,Please check your internet connection </h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        className="search"
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="filter-btn"
        onClick={() => {
          const data = filterDataOnClick(restaurantList, searchText);
          setFilteredRestaurantList(data);
        }}
      >
        Search
      </button>

      {filteredRestaurantList.map((card) => (
        <Link
          to={"/restaurants/" + card.data.id}
          key={card.data.id}
          className="restaurant-container"
        >
          <RestaurantContainer cardData={card} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
