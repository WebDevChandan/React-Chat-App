import React, { useRef } from 'react'

//useRef Hook used to access and manipulate Dom Element
const UseRef_Ex1 = () => {
    const inputRef = useRef(null);
    const onClick = () => {

        //Getting the input value
        console.log(inputRef.current.value);

        //Clear the input value and Focus on it.
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    return (
        <>
            <h1>UseRef Hook</h1>
            <input type="text" ref={inputRef} placeholder='Something...' style={{ padding: 10 }} onKeyDown={(e) => e.key === "Enter" ? onClick() : null} />
            <button onClick={onClick}>Get Value</button>
        </>
    )
}

export default UseRef_Ex1