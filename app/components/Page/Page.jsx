import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

const Page = (props) => {
  const classes = classNames(
    'Page',
    props.pageName,
  );

  return (
    <div className={classes}>
      <div className="Page-content">{props.children}</div>
    </div>
  );
};

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
