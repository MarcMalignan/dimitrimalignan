import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';

const Video = (props) => {
  const src = `//www.dailymotion.com/embed/video/${props.videoId}`;
  const href = `//www.dailymotion.com/video/${props.videoId}`;

  return (
    <div className="Video">
      <a
        className="Video-link"
        href={href}
        target="_blank"
      >{props.title}</a>
      <div className="Video-wrapper">
        <div className="Video-ratio">
          <iframe
            title={props.title}
            src={src}
            allowFullScreen="true"
          />
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
};

Video.defaultProps = {
  videoId: '',
  title: '',
};

export default Video;
