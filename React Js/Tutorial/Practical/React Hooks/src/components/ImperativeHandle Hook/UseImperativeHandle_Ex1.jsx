import React, {useRef} from 'react'
import ButtonParent from './ButtonParent';
import ButtonChild from './ButtonChild';

const UseImperativeHandleTutorial = () => {
    const buttonRef = useRef(null);

    return (
        <>
            <ButtonParent btnRef={buttonRef} />
            <ButtonChild ref={buttonRef} />
        </>
    )
}

export default UseImperativeHandleTutorial