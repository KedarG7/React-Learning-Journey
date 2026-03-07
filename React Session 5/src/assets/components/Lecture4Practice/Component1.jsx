import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Component2 from "./Component2";

const menuCard = createContext();
const Component1 = ({ children }) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((response) => {
        console.log('123', response.data.carts);
        setMenuData(response.data.carts);
      })
      .catch((error) => {
        console.log("Error occurred ! ", error);
      });
  }, []);

  return (
    <>
     
      <menuCard.Provider value={menuData}>{children}</menuCard.Provider>
    </>
  );
};

export default Component1;
export { menuCard };
