import React from 'react';
import { Link } from 'react-router-dom';

import Lang from '../Lang/Lang';
import Nav from '../Nav/Nav';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="Header-logo">
      <Link to="/">Dimitri Malignan</Link>
    </div>
    <Lang />
    <Nav />
  </header>
);

export default Header;
