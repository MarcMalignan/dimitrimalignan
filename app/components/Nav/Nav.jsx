import React from 'react';
import { Link } from 'react-router-dom';

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
      <li key={link.url}>
        <Link to={link.url}>{link.label}</Link>
      </li>
    ));

    return (
      <ul>{listLinks}</ul>
    );
  }
}

export default Nav;
