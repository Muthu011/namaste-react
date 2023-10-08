import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, areaName, cloudinaryImageId, avgRatingString, cuisines } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-sm"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="flex flex-wrap">{avgRatingString}</h4>
      <h4 className="flex flex-wrap">{cuisines.join(", ")}</h4>
      <h4 className="flex flex-wrap">{areaName}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <h1>Promoted</h1>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
