import React, {useEffect} from 'react'

const ChildComp = ({returnMessage}) => {
    //Since, here returnMessage prop is function. So it will create everytime as button get toggled.
    useEffect(() => {
        console.log("THIS WAS COMPUTED");
    }, [returnMessage]);

    return (
        <h2>{returnMessage()}</h2>
  )
}

export default ChildComp