import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.scss';

export const Gallery = ({ children }) => (
  <div className="Gallery">
    {children}
  </div>
);

export const GalleryItem = ({ children }) => (
  <div className="Gallery-item">
    {children}
  </div>
);

Gallery.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
};
Gallery.defaultProps = {
  children: [],
};

GalleryItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
};
GalleryItem.defaultProps = {
  children: [],
};
