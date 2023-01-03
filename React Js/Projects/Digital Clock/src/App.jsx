import React, {useState} from "react";

const App = ()=>{
    let time = new Date().toLocaleTimeString();
    
    const [currTime, setCTime] = useState(time);
    
    setInterval(()=>{
        let time = new Date().toLocaleTimeString();
        setCTime(time);
    },1000)
    
    return(
        <h1>{currTime}</h1>
    );
};
export default App; 