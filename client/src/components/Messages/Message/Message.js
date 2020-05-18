import React from 'react'
import ReactEmoji from 'react-emoji'
import './Message.css'

const Message = ({ message: { user, text }, name }) => {
  let msgSentByCurrentUser = false

  const sanitizeName = name.trim().toLowerCase()

  if (user === sanitizeName) {
    msgSentByCurrentUser = true
  }

  return msgSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="messageAuthor pr-10">{sanitizeName}</p>
      <div className="messageBox backgroundTeal">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="messageAuthor pl-10">{user}</p>
    </div>
  )
}

export default Message
