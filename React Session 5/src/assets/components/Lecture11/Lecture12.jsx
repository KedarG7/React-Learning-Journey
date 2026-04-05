

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './userSliceApis/userSliceApi';


const Lecture12 = () => {
    const [count,setcount] = useState('')
    const userData = useSelector((state)=>state.user.user)
    // console.log("1111111111",userData)
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(fetchData())
    },[])
  return (
    <div>
    <p>hello</p>
    {userData.map((elem)=>{
        if(!elem) return <>Loading ...</>
        return(
            <>
            <div>
            <br />
            <p>{elem.products.title}</p>
            {/* <button onClick={dispatch(fetchData())}>View Details</button> */}
            <br />
            </div>
          
            </>
        )
            
    
    })}
    </div>
  )
}

export default Lecture12