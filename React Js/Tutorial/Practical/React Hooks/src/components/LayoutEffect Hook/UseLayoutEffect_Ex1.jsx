import React, { useRef, useEffect, useLayoutEffect } from 'react'

//useLayoutEffect Hook is very similar to useEffect Hook. It is fundamentally call earlier stage of page rendering than useEffect hook.

//useEffect is called after everything is rendering to the page and shown to the user.

//In contrast, useLayoutEffect is called before the stuff is actually printed to the user. It is UI based hook.
const UseLayoutEffect_Ex1 = () => {
    const inputRef = useRef(null);

    // This will call before useEffect
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello";
    }, []);

    return (
        <>
            <h1>UseLayoutEffect</h1>
            <input type="text" value="Chandan" ref={inputRef} style={{ width: 400, height: 100, fontSize: 25 }} />
        </>
    )
}

export default UseLayoutEffect_Ex1