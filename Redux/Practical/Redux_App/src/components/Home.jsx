import React from 'react'
// useDistpatch: A hook to access the redux dispatch function.
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  
  // Whenever we dispatch action, reducer will get Trigger. 
  //Here, addBtn (Action) dispatch, increment (reducer) Trigger
  const addBtn = () => { 
    dispatch({
      //Syntax of Triggering Reducer
      type: "increment"
    });
  };
  
  const addBtnByVal = ({val}) => { 
    dispatch({
      type: "incrementByValue",
      payload: 25
    });
  };
  
  const subBtn = () => { 
    dispatch({
      type: "decrement"
    });
  };
    return (
      <div>
          <button onClick={addBtn}>Increment</button>
        <button onClick={addBtnByVal}>Increment By 25</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home