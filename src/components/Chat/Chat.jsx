import React, { useEffect, useState } from 'react'
import './Chat.css'
import { user } from '../Join/Join'
import socketIo from "socket.io-client";
import sendImg from '../../assets/send.png';
import close from '../../assets/close.webp';
import Messages from '../Message/Messages'
import ReactScrollToBottom from 'react-scroll-to-bottom'

let socket;
const ENDPOINT = "http://localhost:4000/";

const Chat = () => {

    const [id, setid] = useState("");
    const [messages, setMessages] = useState([]);

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }

    
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        //'connect': It is a custom event 
        socket.on('connect', () => {
            // alert("connected");
            setid(socket.id);
        })

        //'joined': It is a custom event 
        //emit: sending data from here i.e. { user } to backend(server).
        //Here, data always transfer as an object. So, here it basically transfer as {user: user}
        socket.emit('joined', { user });

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
        });

        //Since, we're receiving data from the admin, So socket will be on
        //Admin set at the backed to send welcome message at 'welcom' event occur. So event i.e.'welcome' to receive msg would be same
        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
        })

        socket.on('leave', ( data ) => {
            setMessages([...messages, data]);

        })

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, []);

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
        })

        return () => {
            socket.off();
        }
    }, [messages])


    return (
        <div className='chatPage'>
            <div className="chatContainer">
                <div className="header">
                    <h2>React Chat</h2>
                    <a href="/"><img src={close} alt="close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Messages user={item.id===id?"":item.user} message={item.message} classs={item.id===id?'right':'left'} key={i}/>)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event)=>event.key==="Enter"?send():null} type="text" id='chatInput' />
                    <button onClick={send} className="sendBtn"><img src={sendImg} alt="send" /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat