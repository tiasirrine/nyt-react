import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link to="/" className="navbar-brand">
        New York Time Scraper
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/saved" className="nav-link">
        Saved Articles
      </Link>
    </li>
  </ul>
);

export default Nav;
