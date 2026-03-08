import React from 'react'
import { useState } from 'react'

const MemoMemo = () => {

    const [count,setcount] = useState(0)

    function set(){
        setcount(count + 1)
        console.log(" 1234 " ,count);
    }

    function sub(){
        setcount(count - 1);
        console.log("Unecessary rendering")
    }


  return (
    <>
    <div>
        <button onClick={set}>Count</button>
        <button onClick={sub}>Decrease</button>
        <h1>{count}</h1>
    </div>
    </>
  )
}

export default MemoMemo