import React, { useMemo, useState } from 'react'

const Lecture5 = () => {

    const [Counter,setCounter] = useState(0)

    const mul = useMemo(()=>{

      return  Counter * 2
            
        
    },[increment])


    function increment(){
        setCounter(Counter + 1)
    }

    function decrement(){
        setCounter(Counter - 1)
    }
    // function multiply(){
    //     setCounter(Counter * 3)
    // }

  return (
    <>
    <h2>{mul}</h2>
    <button onClick={increment} >Counter </button>
    <button onClick={decrement}>Decrement Counter</button>
    <h2>{Counter}</h2>
    <br />
 

    
    </>
  )
}

export default Lecture5