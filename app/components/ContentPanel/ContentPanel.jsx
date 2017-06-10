import React from 'react';
import PropTypes from 'prop-types';

import './ContentPanel.scss';

const ContentPanel = props => (
  <div className="ContentPanel">{props.children}</div>
);

ContentPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({}),
  ]),
};

ContentPanel.defaultProps = {
  children: [],
};

export default ContentPanel;
