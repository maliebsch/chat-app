import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="heading">Join Chat</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="btn mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join
