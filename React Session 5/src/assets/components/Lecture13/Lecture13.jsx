
import React from 'react'
import axios from 'axios'

export const FetchDataById = async (id) => {

    try{
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        //  console.log(response.data)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}


