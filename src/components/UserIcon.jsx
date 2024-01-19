import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import DropdownMenu from './DropDownMenu';
import '../styles/UserIcon.css';


const UserIcon = () => {
  return (
    <div className="user-icon">
      <FaUserAlt className="icon" />
      <DropdownMenu>
        <ul>
          <li>Create User</li>
          <li>Login</li>
        </ul>
      </DropdownMenu>
    </div>
  );
};

export default UserIcon;
