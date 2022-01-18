import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  console.log(props);
  return (
    <nav>
      <div className="wrapper">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/forms">Forms</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
