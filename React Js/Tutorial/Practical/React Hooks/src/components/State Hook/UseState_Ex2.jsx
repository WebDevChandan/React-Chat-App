import React, { useState } from 'react'

const UseState_Ex2 = () => {
  const [name, setName] = useState("Your Name will Display Here");

  const displayName = (e) => {
    setName(e.target.value);
  }
  return (
    <>
      <h1>UseState Hook</h1>
      <h2>{name}</h2>
      <input onChange={displayName} type="text" placeholder='Write your Name' style={{ padding: 10, fontSize: 20, margin: 10 + 0 }} />
    </>
  )
}

export default UseState_Ex2;