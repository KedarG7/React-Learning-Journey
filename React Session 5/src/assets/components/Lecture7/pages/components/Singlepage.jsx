import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';




const Singlepage = () => {
    const [loading,setloading] = useState(false)
    const [productdata,setproductdata] = useState([])
    const id = useParams()
    console.log(id.id);
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id.id}`)
        .then((response)=>{
            console.log(response.data);
            setproductdata(response.data)
            setloading(true)
        })
        .catch((error)=>{
            console.log("error",error);
        })
    },[])
  return (
    <>
    <div className="product">
    
    {productdata.title}
       
    </div>
    </>
  )
}

export default Singlepage