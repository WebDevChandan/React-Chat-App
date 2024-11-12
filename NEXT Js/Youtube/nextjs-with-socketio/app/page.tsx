"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { socket } from "./client/socket";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const messageList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function handleReceivedMessage(msg: string) {
      var item = document.createElement('li') as HTMLLIElement;
      item.textContent = msg;

      if (messageList.current)
        messageList.current.appendChild(item);

      window.scrollTo(0, document.body.scrollHeight);

    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on('message', handleReceivedMessage);


    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off('message', handleReceivedMessage);
    };
  }, []);


  const handleMessage = (message: FormData) => {
    const userMessage = message.get("message") as string;

    //Message sending from the client:
    socket.emit("message", userMessage);
  }

  return (
    <>
      <ul id="messages" ref={messageList}></ul>
      <form id="form" action={handleMessage}>
        <input type="text" id="input" name="message" /><button>Send</button>
      </form>
    </>
  );
}