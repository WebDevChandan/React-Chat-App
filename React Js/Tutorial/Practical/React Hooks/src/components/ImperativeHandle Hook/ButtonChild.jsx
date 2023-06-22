import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ButtonChild = forwardRef((props, ref) => {
    const [toggleText, setToggleText] = useState(true);

    useImperativeHandle(ref, () => ({
        //This method will call from parent Button
        alterToggle() {
            setToggleText(!toggleText);
        },
    }));

    return (
        <>
            {/* We can toggle the same text from Child Button as well */}
            <button ref={ref}>Child Button</button>
            {toggleText && <h3>Toggle Text</h3>}
        </>
    )
    alterToggle();

});

export default ButtonChild