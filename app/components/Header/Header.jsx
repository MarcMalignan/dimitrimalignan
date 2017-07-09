import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './Header.scss';

const Header = (props) => {
  const search = props.location.search;
  const href = `/${search}`;

  return (
    <header className="Header">
      <div className="Header-logo">
        <Link to={href}>Dimitri Malignan</Link>
      </div>
      <Nav />
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: {
    search: '',
  },
};

export default withRouter(Header);
