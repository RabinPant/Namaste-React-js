import React, { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constant";
const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANT_MENU + resId);
    const json = await data.json();
    console.log("Customhook", json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useResturantMenu;
