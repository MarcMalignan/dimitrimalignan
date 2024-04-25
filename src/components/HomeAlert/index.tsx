import Button, { SpotifyButton } from '@components/Button';
import './HomeAlert.scss';

export type HomeAlertLink = {
  isSpotify?: boolean;
  label?: string;
  url: string;
};

interface HomeAlertProps {
  img?: string;
  imgAlt?: string;
  imgLink?: string;
  links?: HomeAlertLink[];
  title?: string;
  text?: string;
}

const HomeAlert = ({ img, imgAlt, imgLink, links = [], title, text }: HomeAlertProps) => (
  <div className="HomeAlert">
    {title && <h1>{title}</h1>}

    {img && (
      <div className="HomeAlert-img">
        <a href={imgLink} target="_blank">
          <img src={img} alt={imgAlt} />
        </a>
      </div>
    )}

    {text && <p className="HomeAlert-text">{text}</p>}

    <div className="HomeAlert-body">
      <div className="HomeAlert-body-links">
        {links.map(({ isSpotify, label, url }, index) => (
          <a href={url} target="_blank" key={index}>
            {isSpotify ? <SpotifyButton /> : <Button>{label}</Button>}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default HomeAlert;
