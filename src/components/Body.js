import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = (props) => {
  const [restoData, setRestoData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredRestoData, setFilteredRestoData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.860244798801642&lng=80.23091630336522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestoData(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestoData(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
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
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
            type="text"
          ></input>
          <button
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

        <button
          className="filter-btn"
          onClick={() => console.log("button click")}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestoData.map((item) => (
          <Link to={`/restaurantMenu/${item.info.id}`} key={item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
