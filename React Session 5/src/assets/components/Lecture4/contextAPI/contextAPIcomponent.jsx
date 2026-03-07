import React from 'react'
import { HelloDataContext } from './contextAPI';

const ContextAPIcomponent = () => {


  return (
    <>
    <HelloDataContext.Consumer>
           {(helloData) => {
          if (!helloData)
            return (
              <>
                <h1>Loading...</h1>
              </>
            );
          return (
            <>
              <h1>Hello Context API</h1>
              <h2>{helloData.id}</h2>
            </>
          );
        }}
    </HelloDataContext.Consumer>
    </>
  )
}

export default ContextAPIcomponent