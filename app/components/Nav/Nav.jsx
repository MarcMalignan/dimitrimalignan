import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      { url: '/', label: 'Home' },
      { url: '/bio', label: 'Bio' },
    ];
  }

  render() {
    const listLinks = this.links.map(link => (
      <li className="Nav-item" key={link.url}>
        <Link className="Nav-item-link" to={link.url}>{link.label}</Link>
      </li>
    ));

    return (
      <ul className="Nav">{listLinks}</ul>
    );
  }
}

export default Nav;
