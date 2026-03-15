import React from 'react'
import '../components/ViewDetails.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ViewDetails = () => {

    const navigate = useNavigate()

    const [data,setdata]= useState([]);
    const [loading,setloading] = useState(true)
    

    useEffect(()=>{
        axios.get( `https://dummyjson.com/products` )
        .then((response)=>{
            setdata(response.data.products)
            setloading(false)
            //  console.log(response.data.products)
        })
        .catch((error)=>{
            console.log("error",error);
        })
    },[])

    const handleViewDetails = (id)=>{
        // console.log(id);
        navigate(`/viewdetails/${id}`)
        
    }


  return (
   <>
    <div className="container">
        <div className="data">
            {loading?<>Loading.....</>:<>{data.map((elem)=>{
                return (
                   
                    <div key={elem.id}>
                    <p>{elem.title}</p>
                    <button onClick={()=>handleViewDetails(elem.id)}>View Details</ button>
                      </div>
                   
                )
            })}</>}
        </div>
    </div>
   </>
  )
}

export default ViewDetails