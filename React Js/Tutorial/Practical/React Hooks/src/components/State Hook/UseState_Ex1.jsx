import React, { useState } from 'react'

const UseState_Ex1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>UseState Hook</h1>
      <h2>{counter}</h2>
      <button onClick={() => { setCounter(counter + 1) }}>Change Counter</button>
    </>
  )
}

export default UseState_Ex1;