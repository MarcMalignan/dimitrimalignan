import React from 'react';
import PropTypes from 'prop-types';

import './ContentPanel.scss';

const ContentPanel = ({ children }) => <section className="ContentPanel">{children}</section>;

ContentPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
};

ContentPanel.defaultProps = {
  children: [],
};

export default ContentPanel;
