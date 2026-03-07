import React from 'react'
import Data2component from './data2component'

const Datacomponent = (props) => {


    console.log("Hello",props)
  return (
    <>
<Data2component hello={props}/>
    
    </>
  )
}

export default Datacomponent