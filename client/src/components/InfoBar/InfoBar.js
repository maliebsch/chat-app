import React from 'react'
import './InfoBar.css'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'

const InfoBar = ({ room, users }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="onlineIcon" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <p className="userOnline">currently online ( {users.length} )</p>

        <a href="/">
          <img src={closeIcon} alt="closeIcon" />
        </a>
      </div>
    </div>
  )
}

export default InfoBar
