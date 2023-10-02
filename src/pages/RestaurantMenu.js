import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.860244798801642&lng=80.23091630336522&restaurantId=${id}&catalog_qa=undefined`
    );
    const json = await data.json();
    setMenuData(json?.data);
  };

  if (menuData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessages } =
    menuData?.cards[0]?.card?.card?.info;

  const { itemCards } =
    menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
