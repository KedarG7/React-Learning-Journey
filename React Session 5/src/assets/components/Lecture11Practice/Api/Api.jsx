

import React from 'react'
import axios from 'axios'


const Api = () => {

   try{
    const response = await axios.get(`https://dummyjson.com/products`)
    console.log(response)
    return response.data
   }
   catch(error){
    console.log(error,"error")
   }
}

export default Api