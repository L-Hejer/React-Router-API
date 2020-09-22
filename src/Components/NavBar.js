import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ login, logout, isAuth }) => {
  return (
    <div className="navBar">
      <Link className="link" to="/">
        Home
      </Link>
      <div className="navBar-left">
        <Link className="link" to="/admin">
          Admin Dashboard
        </Link>
        <button className="login" onClick={() => (isAuth ? logout() : login())}>
          {isAuth ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
