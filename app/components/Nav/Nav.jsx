import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render () {
    const links = [
      { url: '/', label: 'Home' },
      { url: '/bio', label: 'Bio' }
    ];

    const listLinks = links.map((link) =>
      <li key={link.url}>
        <Link to={link.url}>{link.label}</Link>
      </li>
    );

    return (
      <ul>{listLinks}</ul>
    )
  }
};

export default Nav;
