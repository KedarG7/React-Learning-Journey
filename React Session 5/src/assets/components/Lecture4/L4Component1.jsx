import React, { useReducer } from "react";
import { dataContext } from "./Lecture4";
import { HelloDataContext } from "./contextAPI/contextAPI";

const L4Component1 = () => {
  return (
    <>
    
      <dataContext.Consumer>
        {(userData) => {
          if (!userData)
            return (
              <>
                <h1>Loading...</h1>
              </>
            );
          return (
            <>
              <h1>Hello Context API</h1>
              <h2>{userData.title}</h2>
            </>
          );
        }}
      </dataContext.Consumer>
    </>
  );
};

export default L4Component1;
