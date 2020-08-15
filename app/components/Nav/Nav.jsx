import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Modal from '../Modal/Modal';

import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          url: '/',
          label: {
            fr: 'Accueil',
            en: 'Home',
          },
        },
        {
          url: '/bio',
          label: {
            fr: 'Bio',
            en: 'Bio',
          },
        },
        {
          url: '/projects',
          label: {
            fr: 'Projets',
            en: 'Projects',
          },
        },
        {
          url: '/photos',
          label: {
            fr: 'Photos',
            en: 'Photos',
          },
        },
        {
          url: '/media',
          label: {
            fr: 'Média',
            en: 'Media',
          },
        },
        {
          url: '/presse',
          label: {
            fr: 'Presse',
            en: 'Press',
          },
        },
        {
          url: '/agenda',
          label: {
            fr: 'Agenda',
            en: 'Concerts',
          },
        },
        {
          url: '/contact',
          label: {
            fr: 'Contact',
            en: 'Contact',
          },
        },
      ],
    };
  }

  listLinks() {
    const {
      location: { search },
    } = this.props;
    const { links } = this.state;

    return links.map(link => {
      const href = {
        pathname: link.url,
        search,
      };

      const isActive = (_, location) =>
        (href.pathname === '/' && location.pathname === '/') ||
        (href.pathname !== '/' && location.pathname.startsWith(href.pathname));

      return (
        <li className="Nav-list-item" key={link.url}>
          <NavLink className="Nav-list-item-link" activeClassName="active" isActive={isActive} to={href}>
            {commons.translate(search, link.label)}
          </NavLink>
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
    const {
      location: { pathname },
    } = this.props;

    const linkFr = { pathname };
    const linkEn = {
      pathname,
      search: '?lang=en',
    };

    return (
      <div className="Nav-lang">
        <Link to={linkFr}>FR</Link>
        <Link to={linkEn}>EN</Link>
      </div>
    );
  }

  renderModal() {
    const { modal } = this.state;

    if (!modal) return null;

    return (
      <Modal
        closeOnClick
        onClose={() => {
          this.closeModal();
        }}
      >
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
