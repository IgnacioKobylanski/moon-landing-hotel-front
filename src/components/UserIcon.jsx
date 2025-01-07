import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropDownMenu';
import '../styles/UserIcon.css';


const UserIcon = () => {
  return (
    <div className="user-icon">
      <FaUserAlt className="icon" />
      <DropdownMenu>
        <ul>
          <li>
            <Link to="/create-user">Sign Up</Link> {}
          </li>
          <li>
            <Link to="/login">Sign In</Link> {}
          </li>
        </ul>
      </DropdownMenu>
    </div>
  );
};

export default UserIcon;