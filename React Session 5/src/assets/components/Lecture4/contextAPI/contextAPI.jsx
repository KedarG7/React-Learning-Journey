import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const HelloDataContext = createContext();

const ContextAPI = ({children}) => {

     const [helloData, sethelloData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com//todos/1`)
      .then((response) => {
        sethelloData(response.data);
      })
      .catch((error) => {
        console.log("This is an error", error);
      });
  },[]);


  return (
    <>
    <HelloDataContext.Provider value={helloData}>
    {children}
    </HelloDataContext.Provider>
    </>
  )
}

export default ContextAPI
export {HelloDataContext}