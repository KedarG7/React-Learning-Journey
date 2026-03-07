import React, { useEffect, useState } from 'react'
import Datacomponent from '../Lecture2/datacomponent'
import axios from 'axios'

const Component = () => {
    const [HelloData,setHelloData] = useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com//todos/1`)
        .then((response)=>{
            setHelloData(response.data);
        }).catch((error)=>{
            console.log("error",error)
        })
        
    },[])
  return (
    <>
    
    <Datacomponent props={HelloData}/>

    </>
  )
}

export default Component