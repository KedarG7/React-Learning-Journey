import React from "react";
import SampleComponent from "./SampleComponent";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Lecture6Sample = () => {
  //---------------------------------------

  const [count, setcount] = useState(0);
  const [data, setdata] = useState([]);

  //---------------------------------------

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/carts`)
      .then((response) => {
        setdata(response.data.carts);
        // console.log(response.data.carts);
      })
      .catch(() => {
        console.log("error is there", error);
      });
  }, []);

  const filterData = useMemo(()=>{
    console.log("This is rendering first time ");
    return data.map((elem) => elem.id === 1);
  },[data])


  //---------------------------------------
  function add() {
    setcount(count + 1);
  }
  //---------------------------------------

  return (
    <>
      <h1>Main Component</h1>
      <button onClick={add}>Add</button>
      {filterData}
      <h2>{count}</h2>
      <SampleComponent />
    </>
  );
};

export default Lecture6Sample;
