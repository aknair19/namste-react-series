import React, { useState, useEffect } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6394617&lng=77.0645588&page_type=DESKTOP_WEB_LISTING"
      );

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

  const filterDataOnClick = () => {
    const data = restaurantList.filter((card) =>
      card?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    setFilteredRestaurantList(data);
  };
  return filteredRestaurantList.length === 0 ? (
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
      <button className="filter-btn" onClick={filterDataOnClick}>
        Search
      </button>

      {filteredRestaurantList.map((card) => (
        <div>
          <Link
            to={"/restaurants/" + card.data.id}
            key={card.data.id}
            className="restaurant-container"
          >
            <RestaurantContainer cardData={card} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
