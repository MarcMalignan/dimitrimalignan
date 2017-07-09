import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal/Modal';

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
    const search = this.props.location.search;

    return this.state.links.map((link) => {
      const href = {
        pathname: link.url,
        search,
      };

      return (
        <li className="Nav-list-item" key={link.url}>
          <NavLink
            className="Nav-list-item-link"
            activeClassName="active"
            exact="true"
            to={href}
          >{link.label}</NavLink>
        </li>
      );
    });
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  renderLang() {
    const pathname = this.props.location.pathname;

    const linkFr = { pathname };
    const linkEn = {
      pathname,
      search: '?lang=en',
    };

    return (
      <div className="Nav-lang">
        <Link className="Nav-lang-flag" to={linkFr}>
          <img src="images/flag_fr.svg" alt="Français" />
        </Link>
        <Link className="Nav-lang-flag" to={linkEn}>
          <img src="images/flag_en.svg" alt="English" />
        </Link>
      </div>
    );
  }

  renderModal() {
    if (!this.state.modal) return null;

    return (
      <Modal closeOnClick onClose={() => { this.closeModal(); }}>
        <ul className="Nav-list mobile">{this.listLinks()}</ul>
        {this.renderLang()}
      </Modal>
    );
  }

  render() {
    return (
      <nav className="Nav">
        <div className="Nav-burger" onClick={() => this.openModal()}>
          <div />
          <div />
          <div />
        </div>
        <ul className="Nav-list">{this.listLinks()}</ul>
        {this.renderLang()}
        {this.renderModal()}
      </nav>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }),
};

Nav.defaultProps = {
  location: {
    pathname: '/',
    search: '',
  },
};

export default withRouter(Nav);
