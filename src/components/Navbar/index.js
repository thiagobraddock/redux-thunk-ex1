import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav>
      <div className="wrapper">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
