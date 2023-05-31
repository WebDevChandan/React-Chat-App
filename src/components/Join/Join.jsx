import React, { useState } from 'react'
import './Join.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

let user;

const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}

const Join = () => {
    //name: variable, setName: method(), it'll reaturn any value that will store at variable 'name'
    const [name, setName] = useState("");
    // console.log(name);
    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>React Chat</h1>
                <input onChange={(e) => setName(e.target.value)} onKeyPress={(event) => event.key === "Enter" ? sendUser() : null} placeholder="Enter Your Name" type="text" id='joinInput' />
                <Link onClick={e => !name ? e.preventDefault() : null} to="/chat"> <button className='joinBtn' onClick={sendUser}>Join Now</button></Link>
            </div>
        </div>
    )
}

export default Join;
export { user }; 