import React from 'react';
import PropTypes from 'prop-types';

import './HomeAlert.scss';

const HomeAlert = ({
  img,
  imgAlt,
  imgLink,
  links,
  title,
}) => (
  <div className="HomeAlert">
    {title && <h1>{title}</h1>}

    {img && (
      <div className="HomeAlert-img">
        <a href={imgLink} target="_blank">
          <img src={img} alt={imgAlt} />
        </a>
      </div>
    )}

    <div className="HomeAlert-body">
      <div className="HomeAlert-body-links">
        {links.map((link, index) => (
          <a href={link.url} target="_blank" key={index}>
            <button type="button" className={link.className}>{link.label}</button>
          </a>
        ))}
      </div>
    </div>
  </div>
);

HomeAlert.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgLink: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

HomeAlert.defaultProps = {
  img: null,
  imgAlt: '',
  imgLink: '',
  links: [],
  title: null,
};

export default HomeAlert;
