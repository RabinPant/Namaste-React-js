import React, { useState } from "react";
import { useEffect } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

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
  console.log("itemCards", itemCards);
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - RS.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResturantMenu;
