import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './Header.scss';

const Header = ({ location: { search } }) => {
  const link = {
    pathname: '/',
    search,
  };

  return (
    <header className="Header">
      <div className="Header-logo">
        <Link to={link}>Dimitri Malignan</Link>
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
