import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/constant";
import useRestaurant from "../utils/useRestaurant";

import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hook
  const restaurants = useRestaurant(resId);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-page">
      <div>
        <h1>resID: {resId}</h1>
        <h2>{restaurants[0]?.card?.card?.info?.name}</h2>
        <img
          src={IMG_URL + restaurants[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h3>Area: {restaurants[0]?.card?.card?.info?.areaName} </h3>
        <h3>City: {restaurants[0]?.card?.card?.info?.city}</h3>
        <h3>avgRating: {restaurants[0]?.card?.card?.info?.avgRating}</h3>
        <h3>
          Cost for two {restaurants[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurants[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (card) => (
              <li key={card?.card?.info?.id}>{card?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
