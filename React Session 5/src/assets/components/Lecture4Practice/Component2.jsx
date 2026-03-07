import React from 'react'
import { menuCard } from './Component1'

const Component2 = () => {
  return (
    <>
    <menuCard.Consumer>
    {
      (menuCard)=>{
        console.log('1234', menuCard);
          if(!menuCard) return <><h5>loading .....</h5></>
          return (
            <>
              <h1>Hello Context API</h1>
              <h2>{menuCard.map((elem, ind)=>{
                return(
                  <>
                  <h3>{elem.id}</h3>
                  </>
                )
              })}</h2>
            </>)
      }
    }
    </menuCard.Consumer>
    </>
  )
}

export default Component2