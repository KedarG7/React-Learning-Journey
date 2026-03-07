import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './apiComponent.css'

const ApiComponent = () => {

    const [data,setdata] = useState([]);
    const [count , setCount]= useState(0)
    // console.log(data)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/carts`)
        .then((response)=>{
            setdata(response.data.carts)
            console.log(response.data.carts)
        })
        .catch(()=>{
            console.log("error is there", error );

        })   
    },[])

    // function filterproduct (){
    //     console.log('7777777777777777777');
    //     return data.filter((elem)=> elem.id === '1')
    // }

    const filterData = useMemo(()=>{
        console.log('rrrrrrrrrrrr');
        return data.filter((elem)=> elem.id === 1);
    },[data])
    
    console.log('aaaaa', filterData);

    const handleAdd = () =>{
        setCount(count + 1);
    }

    return(
        <>
        <h1>Hello</h1>
      
          {/* {filterproduct()} */}


          <button onClick={handleAdd}> add</button>

        {/* <h3>{data.map((e)=>{
            return(
                <>
                <div className='container'>
                    {e.id}
                </div>
                
                </>
            )
        })}</h3> */}


        {/* {data.filter((e)=>{
            e.id
        })} */}
        </>
    )

}

export default ApiComponent;