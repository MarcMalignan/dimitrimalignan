import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Meta from '../../utils/Meta';

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

    const pageClass = classNames(
      'Page',
      props.pageName,
    );

    this.state = { pageClass };
  }

  componentDidMount() {
    this.setTitle();
    Page.sendAnalytics();
    Page.scrollTop();
    Meta.updateFacebookMeta();
    Meta.updateTwitterMeta();
  }

  setTitle() {
    const pageTitle = this.props.pageTitle || this.props.pageName;

    let title = 'Dimitri Malignan';
    title += pageTitle === 'Home' ? '' : ` - ${pageTitle}`;

    document.title = title;
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({}),
  ]),
};

Page.defaultProps = {
  pageName: '',
  pageTitle: '',
  children: [],
};

export default Page;
