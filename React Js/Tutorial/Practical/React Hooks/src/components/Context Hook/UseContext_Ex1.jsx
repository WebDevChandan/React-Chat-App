import React, { useState, createContext } from 'react'
import Username from './Username'
import Login from './Login'

//useContext Hook comes together with the 'Context API'.

//It basically help us to manage our state across various components efficiently.

//With "Context API" data doesn't need to tranfer by props.

export const UserContext = createContext(null);

const UseContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1>UseContext Hook</h1>

      <UserContext.Provider value={{ username, setUsername }}>
      
        <Login />
        <Username />
      
      </UserContext.Provider>
    </>
  )
}

export default UseContextTutorial