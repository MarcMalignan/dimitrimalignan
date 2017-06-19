/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Modal from '../../components/Modal/Modal';
import data from './Photos.data.json';

import './Photos.scss';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: data,
      modal: false,
    };
  }

  listPhotos() {
    return this.state.photos.map((photo, index) => {
      const srcThumb = require(`../../../images/gallery/thumbs/${photo.filename}`);
      const srcFullres = require(`../../../images/gallery/fullres/${photo.filename}`);

      return (
        <div
          key={index}
          className="Photos-gallery-item"
          itemProp="associatedMedia"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <div
            className="Photos-gallery-item-wrapper"
            onClick={() => this.openModal(photo)}
          >
            <img src={srcThumb} alt="" />
          </div>
          <meta itemProp="author" content={photo.copyright} />
          <meta itemProp="thumbnail" content={`http://www.dimitrimalignan.com/${srcThumb}`} />
          <meta itemProp="contentUrl" content={`http://www.dimitrimalignan.com/${srcFullres}`} />
        </div>
      );
    });
  }

  openModal(highres) {
    this.setState({ highres });
  }

  closeModal() {
    this.setState({ highres: undefined });
  }

  renderModal() {
    const photo = this.state.highres;

    if (!photo) return null;

    const srcHighres = require(`../../../images/gallery/highres/${photo.filename}`);
    const srcFullres = require(`../../../images/gallery/fullres/${photo.filename}`);

    const style = {
      backgroundImage: `url(${srcHighres})`,
    };

    return (
      <Modal onClose={() => { this.closeModal(); }}>
        <div className="Photos-highres-img" style={style} />
        <div className="Photos-highres-info">
          <a href={srcFullres} target="_blank">Voir la version haute définition</a>
          <div className="Photos-highres-info-copyright">© {photo.copyright}</div>
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <Page pageName="Photos">
        <ContentPanel>
          <div
            className="Photos-gallery"
            itemScope
            itemType="http://schema.org/ImageGallery"
          >{this.listPhotos()}</div>
        </ContentPanel>
        {this.renderModal()}
      </Page>
    );
  }
}

export default Photos;
