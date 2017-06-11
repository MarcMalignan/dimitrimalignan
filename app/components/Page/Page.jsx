import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);

    const pageClass = classNames(
      'Page',
      props.pageName,
    );

    this.state = { pageClass };
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({}),
  ]),
};

Page.defaultProps = {
  pageName: '',
  children: [],
};

export default Page;
