import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { url: '/', label: 'Accueil' },
        { url: '/bio', label: 'Bio' },
        { url: '/photos', label: 'Photos' },
        { url: '/media', label: 'Média' },
        { url: '/presse', label: 'Presse' },
        { url: '/agenda', label: 'Agenda' },
        { url: '/contact', label: 'Contact' },
      ],
    };
  }

  listLinks() {
    const pathname = this.props.location.pathname;

    return this.state.links.map((link) => {
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
  }

  render() {
    return (
      <ul className="Nav">{this.listLinks()}</ul>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Nav.defaultProps = {
  location: {
    pathname: '/',
  },
};

export default withRouter(Nav);
