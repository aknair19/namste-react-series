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
    <div className='flex space-x-6 m-3'>
      <div className="space-y-">
      <h1 className='text-2xl font-bold' >{restaurants[0]?.card?.card?.info?.name}</h1>
        <h2 className='text-sm' >ResID: {resId}</h2>
      
        <img
          src={IMG_URL + restaurants[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h3 className='text-sm'>Area: {restaurants[0]?.card?.card?.info?.areaName} </h3>
        <h3 className='text-sm'>City: {restaurants[0]?.card?.card?.info?.city}</h3>
        <h3 className='text-sm'>avgRating: {restaurants[0]?.card?.card?.info?.avgRating}</h3>
        <h3>
          Cost for two {restaurants[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-lg">Menu</h1>
        <ul >
          {restaurants[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (card) => (
              <li className="text-gray-600 text-sm" key={card?.card?.info?.id}>{card?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
