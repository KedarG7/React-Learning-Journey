import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchDatabyId } from '../Lecture11/userSliceApis/userSliceApi'

const Lecture13Component1 = () => {

    const [productid,setproductid] = useState(0)
    console.log(productid)

    const dispatch = useDispatch()
    const userDataSample = useSelector((state)=>state.userData)
    useEffect(()=>{
        dispatch(fetchDatabyId())

    },[])


  return (
    <>
    <p>Hello</p>
    <button onClick={()=> setproductid(2)}>Click Me</button>
    </>
  )
}

export default Lecture13Component1