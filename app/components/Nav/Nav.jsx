import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classNames from 'classnames';
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
    const pathname = this.props.location.pathname;
    const search = this.props.location.search;

    return this.state.links.map((link) => {
      const classes = classNames(
        'Nav-list-item',
        { active: pathname === link.url },
      );

      const href = link.url + search;

      return (
        <li className={classes} key={link.url}>
          <Link className="Nav-list-item-link" to={href}>{link.label}</Link>
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

    const linkFr = pathname;
    const linkEn = `${pathname}?lang=en`;

    return (
      <div className="Nav-lang">
        <Link to={linkFr}>FR</Link>
        <Link to={linkEn}>EN</Link>
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
