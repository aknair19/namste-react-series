import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constant";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6394617&lng=77.0645588&restaurantId=158018&submitAction=ENTER"
    );
    const data = await response.json();
    console.log(Object.values(data?.data));

    setRestaurant(Object.values(data?.data));
  }

  return (
    <div>
      <h1>resID: {id}</h1>
      <h2>{restaurant[1][0].card.card.info.name}</h2>
      <img
      // src={IMG_URL + restaurant[0].card.card.info.slugs.cloudinaryImageId}
      />
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
