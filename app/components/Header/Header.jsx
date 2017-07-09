import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="Header-logo">
      <Link to="/">Dimitri Malignan</Link>
    </div>
    <Nav />
  </header>
);

export default Header;
