import { useState, useEffect } from "react";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    return () => {};
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.860244798801642&lng=80.23091630336522&restaurantId=${resId}&catalog_qa=undefined`
    );
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};
