import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

class Page extends React.Component {
  static scrollTop() {
    document.getElementById('content').scrollTop = 0;
  }

  static sendAnalytics() {
    ga('set', 'page', window.location.pathname);
    ga('send', 'pageview');
  }

  constructor(props) {
    super(props);

    const pageClass = classNames('Page', props.pageName);

    this.state = { pageClass };
  }

  componentDidMount() {
    this.setTitle();
    this.setDescription();
    Page.sendAnalytics();
    Page.scrollTop();
  }

  setTitle() {
    const { pageTitle, pageName } = this.props;

    const page = pageTitle || pageName;

    let title = 'Dimitri Malignan';
    title += page === 'Home' ? '' : ` - ${page}`;

    document.title = title;
  }

  setDescription() {
    const { pageName } = this.props;

    let desc;

    // TODO : add descriptions for all pages
    switch (pageName) {
      case 'Bio':
        desc = '';
        break;
      case 'Projects':
        desc = '';
        break;
      case 'Photos':
        desc = '';
        break;
      case 'Media':
        desc = '';
        break;
      case 'Presse':
        desc = '';
        break;
      case 'Agenda':
        desc = '';
        break;
      case 'Contact':
        desc = '';
        break;
      case 'MissingVoices':
        desc = '';
        break;
      default:
        // eslint-disable-next-line max-len
        desc = "Site officiel de Dimitri Malignan, Pianiste français né en 1998, Prix Cortot de l'Ecole Normale de Musique de Paris, lauréat de nombreux concours internationaux";
        break;
    }

    document.getElementById('metaDesc').content = desc;
  }

  render() {
    const { children } = this.props;
    const { pageClass } = this.state;

    return (
      <div className={pageClass}>
        <div className="Page-content">{children}</div>
      </div>
    );
  }
}

Page.propTypes = {
  pageName: PropTypes.string,
  pageTitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
};

Page.defaultProps = {
  pageName: '',
  pageTitle: '',
  children: [],
};

export default Page;
