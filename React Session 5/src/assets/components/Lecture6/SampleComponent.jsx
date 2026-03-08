import React from 'react'
import { memo } from 'react';
const SampleComponent = () => {

    console.log("Hello Sample Component");
  return (
    <>
    <h1>Sample Component</h1>
    </>
  )
}

export default memo(SampleComponent);