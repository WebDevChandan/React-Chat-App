import React, { useState, useCallback } from 'react'
import ChildComp from './ChildComp';

//useCallback Hook is extremely similar to useMemo hook.
//The problem is same in both cases of useMemo & useCallback.
//In useCallback problem causes because of callBack function
//In useMemo, Function will created everytime if any state change, if we don't pass dependency array along with any state.

//The Difference:-
//With useMemo hook you're able to store value that is memoize from a function (means the value return from the memoize function can store in another variable).

//With useCallback we don't store value that return from the function to another variable. We actually store the function itself.

//With useMemo we wanted to access the value where with useCallback we want wanted to access the function.
const UseCallback_Ex1 = () => {
    const [message, setMessage] = useState("This is sample Message");
    const [toggle, setToggle] = useState(true);

    const returnMessage = useCallback(() => {
        return message;

        //This function will create when 'message' that passed in the dependency array get changed.
    }, [message]);

    return (
        <>

            <h1>UseCallback Hook</h1>
           
            {/* Passing the Function not data */}
            <ChildComp returnMessage={returnMessage} />
            
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <h3>This is Toggle Text</h3>}
        </>
    )
}

export default UseCallback_Ex1