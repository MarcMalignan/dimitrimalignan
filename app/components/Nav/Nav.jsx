import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Modal from '../../components/Modal/Modal';

import './Nav.scss';

import FlagFrImg from '../../../images/flag_fr.svg';
import FlagEnImg from '../../../images/flag_en.svg';

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
    const search = this.props.location.search;

    return this.state.links.map(link => {
      const href = {
        pathname: link.url,
        search,
      };

      return (
        <li className="Nav-list-item" key={link.url}>
          <NavLink className="Nav-list-item-link" activeClassName="active" exact to={href}>
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
    const pathname = this.props.location.pathname;

    const linkFr = { pathname };
    const linkEn = {
      pathname,
      search: '?lang=en',
    };

    return (
      <div className="Nav-lang">
        <Link className="Nav-lang-flag" to={linkFr}>
          <img src={FlagFrImg} alt="Français" />
        </Link>
        <Link className="Nav-lang-flag" to={linkEn}>
          <img src={FlagEnImg} alt="English" />
        </Link>
      </div>
    );
  }

  renderModal() {
    if (!this.state.modal) return null;

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
