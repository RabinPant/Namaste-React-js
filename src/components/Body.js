import React from "react";
import { useState, useEffect } from "react";
import ResturantCard from "../components/ResturantCard";
import { resList } from "../utils/mockData";
import { GET_RES_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [content, setContent] = useState([]);
  const [inputContent, setInputContent] = useState("");

  const [filteredResturant, setFilteredResturant] = useState([]);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    getResturants();
  }, []);

  const getResturants = async () => {
    const data = await fetch(GET_RES_API_URL);

    const json = await data.json();
    // optional chaining
    setContent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      "json",
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (onlineStatus == false) {
    return <h1>You're internet access is not available try agian please!!</h1>;
  }
  return content.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Resturant"
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterData = content.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(inputContent.toLowerCase());
              });
              setFilteredResturant(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = content.filter(
              (res) => res.info.avgRating >= 4.5
            );
            console.log(filteredList);
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <ResturantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
