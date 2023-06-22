import React, { useReducer } from 'react'

//useReducer Hook: It is very similar to useState hook but the difference is unlike useState we can collectively manage and perform multiple actions (Like to change counter & text at the same time) at once from the same event.
//Format: const[state, dispatch] = useReducer(reducer, initialStates);

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };

        case "toggleShowText":
            return { count: state.count, showText: !state.showText };

        default:
            return state;
    }
}

const UseReducer_Ex1 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    return (
        <>
            <h1>UseReducer Hook</h1>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" });
            }}>Change Counter & Switch Text</button>
            {state.showText && <h3>This is Sample Text</h3>}
        </>
    )
}

export default UseReducer_Ex1