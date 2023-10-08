import Shimmer from "../components/Shimmer";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  const [accordionIndex, setAccordionIndex] = useState(0);
  const [isAccordionClickedAgain, setIsAccordionClickedAgain] = useState(false);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessages } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl ">{name}</h1>
      <p>{cuisines.join(", ")}</p>

      {/* Categories of accordion */}

      {categories.map((item, index) => (
        <RestaurantCategory
          key={item?.card?.card?.info?.title}
          data={item?.card?.card}
          showItems={
            index === accordionIndex && !isAccordionClickedAgain ? true : false
          }
          setShowIndex={() => {
            setIsAccordionClickedAgain(accordionIndex === index ? true : false);
            setAccordionIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
