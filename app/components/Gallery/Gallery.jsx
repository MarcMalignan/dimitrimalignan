import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.scss';

export const Gallery = ({ children, className }) => <div className={classnames('Gallery', className)}>{children}</div>;

export const GalleryItem = ({ children, className }) => (
  <div className={classnames('Gallery-item', className)}>{children}</div>
);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape({})]),
  className: PropTypes.string,
};
const defaultProps = {
  children: [],
  className: '',
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

GalleryItem.propTypes = propTypes;
GalleryItem.defaultProps = defaultProps;
