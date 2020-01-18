import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

class Page extends React.Component {
  static scrollTop() {
    document.getElementById('content').scrollTop = 0;
  }

  static sendAnalytics() {
    ga('set', 'page', location.pathname);
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
    const pageTitle = this.props.pageTitle || this.props.pageName;

    let title = 'Dimitri Malignan';
    title += pageTitle === 'Home' ? '' : ` - ${pageTitle}`;

    document.title = title;
  }

  setDescription() {
    let desc;

    // TODO : add descriptions for all pages
    switch (this.props.pageName) {
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
        desc =
          // eslint-disable-next-line max-len
          "Site officiel de Dimitri Malignan, Pianiste français né en 1998, Prix Cortot de l'Ecole Normale de Musique de Paris, lauréat de nombreux concours internationaux";
        break;
    }

    document.getElementById('metaDesc').content = desc;
  }

  render() {
    return (
      <div className={this.state.pageClass}>
        <div className="Page-content">{this.props.children}</div>
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
