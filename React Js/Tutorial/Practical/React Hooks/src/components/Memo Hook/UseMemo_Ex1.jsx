import React, { useState, useMemo, useEffect } from 'react'

//useMemo Hook basically use for optimization of our React App.
//It is similar to useEffect hook.
//By default, In react when state changes it re-render its component which in result it also recall the  function again that is defined and called in the global scope.
// To avoid this recalling of function defined at global scope, we use useMemo Hook
const UseMemo_Ex1 = () => {
    const [toggle, setToggle] = useState(true);
    const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur.";

    const funData = () => {
        console.log("THIS WAS COMPUTED");

        return data;
    }

    const getData = useMemo(() => {
        funData();

        //Now, we've passed 'data' variable to the dependency array, which let useMemo hook to execute their function only if 'data' changes. 
    }, [data]);

    return (
        <>
            <h1>UseMemo Hook</h1>
            <h3>{getData}</h3>

            {/* If we don't use useMemo hook, "THIS WAS COMPUTED" to the console as it get toggle */}
            <button onClick={() => setToggle(!toggle)}> Toggle button</button>
            {toggle && <h2>Toggle Text</h2>}

        </>
    )
}

export default UseMemo_Ex1