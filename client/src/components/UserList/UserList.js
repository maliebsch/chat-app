import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import './UserList.css'

const UsersList = ({ users }) => {
  return (
    <ul className="userList">
      {users.map((user) => (
        <li className="user" key={user.name}>
          {user.name}{' '}
          <img src={onlineIcon} alt="onlineIcon" className="onlineIcon" />
        </li>
      ))}
    </ul>
  )
}

export default UsersList
