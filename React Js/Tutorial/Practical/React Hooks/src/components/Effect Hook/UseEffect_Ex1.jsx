import React, { useEffect, useState } from 'react';

//UseEffect Hook is a function that always call when page render or re-render.
const UseEffect_Ex1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("hello");

        //This useEffect will call whenever 'name' state will change.

        //If want this useEffect to render only once (After initial render), irrespective of any state change, keep its array empty.

        //If there is no empty array, this useEffect will call whenever page render or re-render/ in case of any state change. 
    }, [count]);

    return (
        <>
            <h1>UseEffect Hook</h1>
            <h2>{count}</h2>

            <button onClick={() => setCount(count+1)}>My Name</button>
        </>
    )
}

export default UseEffect_Ex1