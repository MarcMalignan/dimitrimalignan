import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classNames from 'classnames';

import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      { url: '/', label: 'Accueil' },
      { url: '/bio', label: 'Biographie' },
      { url: '/photos', label: 'Photos' },
      { url: '/videos', label: 'Vidéos' },
      { url: '/agenda', label: 'Agenda' },
      { url: '/contact', label: 'Contact' },
    ];
  }

  render() {
    const pathname = this.props.location.pathname;

    const listLinks = this.links.map((link) => {
      const classes = classNames(
        'Nav-item',
        { active: pathname === link.url },
      );

      return (
        <li className={classes} key={link.url}>
          <Link className="Nav-item-link" to={link.url}>{link.label}</Link>
        </li>
      );
    });

    return (
      <ul className="Nav">{listLinks}</ul>
    );
  }
}

Nav.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
};

Nav.defaultProps = {
  location: {
    pathname: '/',
  },
};

export default withRouter(Nav);
