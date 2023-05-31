import React from 'react'
import '../Message/Messages.css'

const Messages = ({ user, message, classs }) => {
  if (user) {
    return (
      <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
    )
  } else {
    return (
      <div className={`messageBox ${classs}`} >{`You: ${message}`}</div>
    )
  }
}

export default Messages