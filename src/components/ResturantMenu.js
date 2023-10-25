import React, { useState } from "react";
import { useEffect } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

function ResturantMenu() {
  const { resId } = useParams();

  //custom hook
  const resInfo = useResturantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log(
    "itemCards",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      {/* categories accordions */}

      {categories.map((category) => {
        return (
          <ResturantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
          />
        );
      })}
    </div>
  );
}

export default ResturantMenu;
