import React from 'react'

//UseImperativeHandle Hook allow you to access child state from the parent
const ButtonParent = ({btnRef}) => {
    
    return (
        <>
            <h1>UseImperativeHandle Hook</h1>
            <button onClick={() => { btnRef.current.alterToggle() }}>Parent Button</button>
        </>
    )
}

export default ButtonParent;