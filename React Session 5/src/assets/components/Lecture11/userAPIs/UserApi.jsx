

export const fetchDataUser = async ()=>{
    try{
        const response = await axios.get(`https://dummyjson.com/products'`)
        return response.data
    }
    catch(err){
        console.log('error')
    }
}