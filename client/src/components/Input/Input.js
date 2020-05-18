import React from 'react'
import './Input.css'

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className="submit" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </div>
  )
}

export default Input
