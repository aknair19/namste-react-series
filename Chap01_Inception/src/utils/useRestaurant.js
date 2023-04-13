import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "./constant";
const useRestaurant = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const response = await fetch(`${FETCH_RESTAURANT_MENU}${resId}`);
    const data = await response.json();
    console.log(data?.data?.cards);

    setRestaurants(data?.data?.cards);
  };
  return restaurants;
};

export default useRestaurant;
