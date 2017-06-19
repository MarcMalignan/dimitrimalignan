import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';

const Video = (props) => {
  const src = `//www.dailymotion.com/embed/video/${props.videoId}`;
  const href = `//www.dailymotion.com/video/${props.videoId}`;

  return (
    <div
      className="Video"
      itemProp="associatedMedia"
      itemScope
      itemType="http://schema.org/VideoObject"
    >
      <a
        className="Video-link"
        href={href}
        target="_blank"
      >{props.title}</a>
      <div className="Video-wrapper">
        <iframe
          title={props.title}
          src={src}
          allowFullScreen="true"
          itemProp="embedUrl"
        />
      </div>
      <meta itemProp="name" content={props.title} />
      <meta itemProp="description" content={props.title} />
      <meta itemProp="uploadDate" content={props.date} />
    </div>
  );
};

Video.propTypes = {
  videoId: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

Video.defaultProps = {
  videoId: '',
  title: '',
  date: '',
};

export default Video;
