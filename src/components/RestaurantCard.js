import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;


  const { name, areaName, cloudinaryImageId, avgRatingString, cuisines } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join("")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
