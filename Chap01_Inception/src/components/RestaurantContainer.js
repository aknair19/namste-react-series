import { IMG_URL } from "../utils/constant";
const RestaurantContainer = ({ cardData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    cardData.data;

  return (
    <div className="restaurant-card">
      <img className="res-image" src={`${IMG_URL}/${cloudinaryImageId}`} />
      <div className="res-body">
        <h3>{name}</h3>
        <div className="res-head">
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
