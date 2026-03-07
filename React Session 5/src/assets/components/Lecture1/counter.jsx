import { useState } from "react"

const Counter = ()=>{
    const [Count,setCount] = useState(0)

    function increment(){

        setCount(Count+1)

    }

    return(
        <button onClick={increment}>Counter : {Count}</button>
    )
}

export default Counter