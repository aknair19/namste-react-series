import { IMG_URL } from "../utils/constant";
const RestaurantContainer = ({ cardData ,word}) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    cardData.data;

  return (
    <div className=" container  flex flex-col  w-fit max-w-sm  ">
      <img className="w-30 h-30 " src={`${IMG_URL}/${cloudinaryImageId}`} />
      <div>
        <h3 className="font-bold">{name}</h3>
        <div>
          <p className="">{cuisines.join(", ")}</p>
          <p>{avgRating}</p>
          <p>{word}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
