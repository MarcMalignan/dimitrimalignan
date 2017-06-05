import React from 'react';

import Nav from '../Nav/Nav';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-logo">Dimitri Malignan</div>
        <Nav />
      </div>
    );
  }
}

export default Header;
