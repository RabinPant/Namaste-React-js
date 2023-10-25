import React from "react";
import { useState, useEffect } from "react";
import ResturantCard, { withPromotedLable } from "../components/ResturantCard";
import { resList } from "../utils/mockData";
import { GET_RES_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [content, setContent] = useState([]);
  const [inputContent, setInputContent] = useState("");

  const [filteredResturant, setFilteredResturant] = useState([]);
  const ResturantCardPromoted = withPromotedLable(ResturantCard);
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
  };
  if (onlineStatus == false) {
    return <h1>You're internet access is not available try agian please!!</h1>;
  }
  return content.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-black h-9"
            placeholder="Resturant"
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 py-2 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-xl"
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
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              {res.info.promoted ? (
                <ResturantCardPromoted resData={res} />
              ) : (
                <ResturantCard resData={res} />
              )}
              {/* if promoted lable true then render the higher order component */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
