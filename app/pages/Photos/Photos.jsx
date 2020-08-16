/* eslint-disable global-require, import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import { Gallery, GalleryItem } from '../../components/Gallery/Gallery';
import Modal from '../../components/Modal/Modal';
import Page from '../../components/Page/Page';

import './Photos.scss';

const getImages = async (photos, folder) => {
  const fetchImages = [];
  photos.forEach(photo =>
    fetchImages.push(
      import(
        /* webpackChunkName: "lazy", webpackMode: "lazy-once" */ `../../../images/gallery/${folder}/${photo.filename}`
      ),
    ),
  );

  const images = await Promise.all(fetchImages);
  return images.map(image => image.default);
};

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('photos', async photos => {
      const [thumbs, highres, fullres] = await Promise.all([
        getImages(photos, 'thumbs'),
        getImages(photos, 'highres'),
        getImages(photos, 'fullres'),
      ]);

      const photosWithImages = photos.map((photo, index) => ({
        ...photo,
        srcThumb: thumbs[index],
        srcHighres: highres[index],
        srcFullres: fullres[index],
      }));

      this.setState({ photos: photosWithImages });
    });
  }

  listPhotos() {
    const { photos } = this.state;
    if (!photos) return null;
    return photos.map((photo, index) => {
      const onClick = () => this.openModal(photo);

      return (
        <GalleryItem key={index}>
          <div
            className="Photo-wrapper"
            onClick={onClick}
            itemProp="associatedMedia"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <img src={photo.srcThumb} alt="" />
          </div>
          <meta itemProp="author" content={photo.copyright} />
          <meta itemProp="thumbnail" content={`http://www.dimitrimalignan.com/${photo.srcThumb}`} />
          <meta itemProp="contentUrl" content={`http://www.dimitrimalignan.com/${photo.srcFullres}`} />
        </GalleryItem>
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
    const {
      location: { search },
    } = this.props;
    const { highres: photo } = this.state;

    if (!photo) return null;

    const style = {
      backgroundImage: `url(${photo.srcHighres})`,
    };

    const highresLabel = {
      fr: 'Version haute définition',
      en: 'High-resolution version',
    };

    return (
      <Modal
        onClose={() => {
          this.closeModal();
        }}
      >
        <div className="Photos-highres-img" style={style} />
        <div className="Photos-highres-info">
          <a href={photo.srcFullres} target="_blank">
            {commons.translate(search, highresLabel)}
          </a>
          <div className="Photos-highres-info-copyright">© {photo.copyright}</div>
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <Page pageName="Photos">
        <ContentPanel>
          <div itemScope itemType="http://schema.org/ImageGallery">
            <Gallery>{this.listPhotos()}</Gallery>
          </div>
        </ContentPanel>
        {this.renderModal()}
      </Page>
    );
  }
}

Photos.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Photos.defaultProps = {
  location: {
    search: '',
  },
};

export default Photos;
