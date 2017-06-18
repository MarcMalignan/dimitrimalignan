import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

class Page extends React.Component {
  static scrollTop() {
    document.getElementById('content').scrollTop = 0;
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
    Page.scrollTop();

    const pageTitle = this.props.pageTitle || this.props.pageName;
    document.title = `Dimitri Malignan - ${pageTitle}`;
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
