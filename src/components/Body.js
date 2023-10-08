import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = (props) => {
  const [restoData, setRestoData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredRestoData, setFilteredRestoData] = useState([]);
  const RestaurantWithPromotedLable = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    setLoading(true);
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.860244798801642&lng=80.23091630336522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setRestoData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestoData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4  items-center">
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-solid border-black"
            type="text"
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the resto cards and update the UI
              const filteredContents = restoData.filter((item) =>
                item.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestoData(filteredContents);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4  items-center">
          <button
            className="px-4 bg-gray-100 m-4 py-2 rounded-lg"
            onClick={() => console.log("button click")}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestoData.map((item) => (
          <Link to={`/restaurantMenu/${item.info.id}`} key={item.info.id}>
            {item.info.promoted ? (
              <RestaurantWithPromotedLable resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
