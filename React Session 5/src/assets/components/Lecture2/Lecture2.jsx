import React, { useEffect } from 'react'
import Component1 from './component1'
import axios from 'axios'
import { useState } from 'react'

const Lecture2 = () => {

    const [HelloData,setHelloData] = useState()
    useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com//todos/1`)
      .then((response) => {
        setHelloData(response.data);
      })
      .catch((error)=>{
        console.log("This is an error",error);
      });

    },[])
  return (
    <>
    <Component1 props={HelloData}/>
    </>

  )
}

export default Lecture2