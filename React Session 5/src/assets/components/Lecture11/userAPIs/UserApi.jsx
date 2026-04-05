
import axios from 'axios'
export const fetchDataUser = async (e)=>{
    console.log('eeeeee',e)
    try{
        const response = await axios.get('https://dummyjson.com/products')
        console.log(response,'1233444')
        return response.data.products
    }
    catch(err){
        console.log('error')
    }
}

// export const getDataById = async (e)=>{
//     try{
//         const response = await axios.get(`https://dummyjson.com/products${e}`)
//         console.log('kededededee',response)

//     }
//     catch(error){
//         console.log("error",error)
//     }
// }