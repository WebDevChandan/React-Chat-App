import React, { useContext } from 'react'
import { UserContext } from './UseContext_Ex1'

const Username = () => {
    const { username } = useContext(UserContext);
    return (
        <h1>Username: {username} </h1>
    )
}

export default Username