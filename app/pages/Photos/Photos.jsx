import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Photos.data.json';

import './Photos.scss';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: data,
    };

    this.closeHighres = this.closeHighres.bind(this);
  }

  openHighres(highres) {
    this.setState({ highres });
    document.addEventListener('keyup', this.closeHighres);
  }

  closeHighres(e) {
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 27)) {
      this.setState({ highres: undefined });
      document.removeEventListener('keyup', this.closeHighres);
    }
  }

  listPhotos() {
    return this.state.photos.map((photo, index) => {
      const thumb = `../../../images/gallery/thumbs/${photo.filename}`;

      return (
        <div key={index} className="Photos-gallery-item">
          <div
            className="Photos-gallery-item-wrapper"
            onClick={() => this.openHighres(photo)}
          >
            <img src={thumb} alt="" />
          </div>
        </div>
      );
    });
  }

  renderHighRes() {
    const photo = this.state.highres;

    if (!photo) return null;

    const src = `../../../images/gallery/highres/${photo.filename}`;
    const style = {
      backgroundImage: `url(${src})`,
    };

    return (
      <div className="Photos-highres">
        <div className="Photos-highres-close">
          <span onClick={this.closeHighres}>✕</span>
        </div>
        <div className="Photos-highres-img" style={style} />
        <div className="Photos-highres-info">
          <a href={src} target="_blank">Voir la version haute définition</a>
          <div className="Photos-highres-info-copyright">© {photo.copyright}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Page pageName="Photos">
        <ContentPanel>
          <div className="Photos-gallery">{this.listPhotos()}</div>
        </ContentPanel>
        { this.renderHighRes() }
      </Page>
    );
  }
}

export default Photos;
