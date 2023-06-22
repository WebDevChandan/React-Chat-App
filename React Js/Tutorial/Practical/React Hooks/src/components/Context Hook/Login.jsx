import React, { useContext } from 'react'
import { UserContext } from './UseContext_Ex1'


const Login = () => {
    //Object Destructuring
    const { setUsername } = useContext(UserContext);
    return (
        <input onChange={(e) => setUsername(e.target.value)} type="text" style={{ padding: 10, fontSize: 20 }} />
    )
}

export default Login