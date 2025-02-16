import classNames from 'classnames';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { getLang, translate } from '@utils';
import Modal from '../Modal';
import './Nav.scss';

const LINKS = [
  {
    url: '/bio',
    label: {
      fr: 'Bio',
      en: 'Bio',
    },
  },
  {
    url: '/music',
    label: {
      fr: 'Musique',
      en: 'Music',
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
    url: '/videos',
    label: {
      fr: 'Vidéos',
      en: 'Videos',
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
    url: '/missing-voices',
    label: {
      fr: 'Missing Voices',
      en: 'Missing Voices',
    },
  },
  {
    url: '/contact',
    label: {
      fr: 'Contact',
      en: 'Contact',
    },
  },
];

const listLinks = (search: string, onClick?: () => void) => {
  return LINKS.map((link) => {
    const href = {
      pathname: link.url,
      search,
    };

    return (
      <li className="Nav-list-item" key={link.url}>
        <NavLink
          className={({ isActive }) => classNames('Nav-list-item-link', { active: isActive })}
          to={href}
          onClick={onClick}
        >
          {translate(search, link.label)}
        </NavLink>
      </li>
    );
  });
};

const renderLang = (pathname: string, search: string) => {
  const lang = getLang(search);

  const linkFr = { pathname };
  const linkEn = {
    pathname,
    search: '?lang=en',
  };

  return (
    <div className="Nav-lang">
      <Link to={linkFr} className={classNames({ active: lang === 'fr' })}>
        FR
      </Link>
      <Link to={linkEn} className={classNames({ active: lang === 'en' })}>
        EN
      </Link>
    </div>
  );
};

const Nav = () => {
  const { pathname, search } = useLocation();

  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <nav className="Nav">
      <div className="Nav-burger" onClick={openModal}>
        <div />
        <div />
        <div />
      </div>
      <ul className="Nav-list">{listLinks(search)}</ul>

      {renderLang(pathname, search)}

      {modal ? (
        <Modal onClose={closeModal}>
          <ul className="Nav-list mobile">{listLinks(search, closeModal)}</ul>
          {renderLang(pathname, search)}
        </Modal>
      ) : null}
    </nav>
  );
};

export default Nav;
