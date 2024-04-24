import './HomeAlert.scss';

type HomeAlertLink = {
  className?: string;
  label: string;
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

    {text && (
      <p className="HomeAlert-text">
        <i>{text}</i>
      </p>
    )}

    {img && (
      <div className="HomeAlert-img">
        <a href={imgLink} target="_blank">
          <img src={img} alt={imgAlt} />
        </a>
      </div>
    )}

    <div className="HomeAlert-body">
      <div className="HomeAlert-body-links">
        {links.map(({ className, label, url }, index) => (
          <a href={url} target="_blank" key={index}>
            <button type="button" className={className}>
              {label}
            </button>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default HomeAlert;
