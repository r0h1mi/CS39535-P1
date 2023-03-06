import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from './images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src="https://1000logos.net/wp-content/uploads/2020/09/Adventure-Time-Logo.png" alt="Treehouse Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/ice-kingdom" className="nav-link">
            Ice Kingdom
          </Link>
        </li>
        <li>
          <Link to="/candy-land" className="nav-link">
            Candy Land
          </Link>
        </li>
        <li>
          <Link to="/nightosphere" className="nav-link">
            Nightosphere
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
