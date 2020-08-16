import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';

const videoConfig = {
  dailymotion: {
    src: '//www.dailymotion.com/embed/video/',
    href: '//www.dailymotion.com/video/',
  },
  youtube: {
    src: '//www.youtube.com/embed/',
    href: '//www.youtube.com/watch?v=',
  },
};

const Video = ({ date, title, type, videoId }) => {
  const config = videoConfig[type];
  if (!config) return null;

  const src = config.src + videoId;
  const href = config.href + videoId;

  return (
    <div className="Video" itemProp="associatedMedia" itemScope itemType="http://schema.org/VideoObject">
      <a className="Video-link" href={href} target="_blank">
        {title}
      </a>
      <div className="Video-wrapper">
        <iframe title={title} src={src} allowFullScreen="true" itemProp="embedUrl" />
      </div>
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={title} />
      <meta itemProp="uploadDate" content={date} />
    </div>
  );
};

Video.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
};

Video.defaultProps = {
  videoId: '',
  title: '',
  date: '',
  type: '',
};

export default Video;
