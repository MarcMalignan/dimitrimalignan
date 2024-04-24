import { Video as VideoType } from '@types';
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

interface VideoProps {
  date: string;
  title: string;
  type: VideoType['type'];
  videoId: string;
}

const Video = ({ date, title, type, videoId }: VideoProps) => {
  const config = videoConfig[type];
  if (!config) return null;

  return (
    <div className="Video" itemProp="associatedMedia" itemScope itemType="http://schema.org/VideoObject">
      <a className="Video-link" href={`${config.href}${videoId}`} target="_blank">
        {title}
      </a>
      <div className="Video-wrapper">
        <iframe title={title} src={`${config.src}${videoId}`} itemProp="embedUrl" allowFullScreen />
      </div>
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={title} />
      <meta itemProp="uploadDate" content={date} />
    </div>
  );
};

export default Video;
