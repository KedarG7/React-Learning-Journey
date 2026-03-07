import React, { createContext, useEffect, useState } from "react";
import L4Component1 from "./L4Component1";
import axios from "axios";



const dataContext = createContext()

const Lecture4 = () => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com//todos/1`)
      .then((response) => {
        setuserData(response.data);
      })
      .catch((error) => {
        console.log("This is an error", error);
      });
  },[]);
  return (
  <>
  <dataContext.Provider value={userData}>
    <L4Component1/>
  </dataContext.Provider>
  </>
  );
};

export default Lecture4;
export {dataContext}
