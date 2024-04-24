import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import { Gallery, GalleryItem } from '@components/Gallery';
import Modal from '@components/Modal';
import Page from '@components/Page';
import { Photo, PhotoWithImage } from '@types';
import { getData, translate } from '@utils';
import './Photos.scss';

const Photos = () => {
  const { search } = useLocation();
  const [highres, setHighres] = useState<PhotoWithImage>();

  const { data: photos } = useQuery({
    queryKey: ['photos'],
    queryFn: () =>
      getData<Photo[]>('photos').then(
        (data) =>
          data.map((photo) => ({
            ...photo,
            srcThumb: `/images/gallery/thumbs/${photo.filename}`,
            srcHighres: `/images/gallery/highres/${photo.filename}`,
            srcFullres: `/images/gallery/fullres/${photo.filename}`,
          })) as PhotoWithImage[]
      ),
  });

  const renderModal = (photo: PhotoWithImage) => {
    const style = {
      backgroundImage: `url("${photo.srcHighres}")`,
    };

    const highresLabel = {
      fr: 'Version haute définition',
      en: 'High-resolution version',
    };

    return (
      <Modal onClose={() => setHighres(undefined)}>
        <div className="Photos-highres-img" style={style} />
        <div className="Photos-highres-info">
          <a href={photo.srcFullres} target="_blank">
            {translate(search, highresLabel)}
          </a>
          <div className="Photos-highres-info-copyright">© {photo.copyright}</div>
        </div>
      </Modal>
    );
  };

  return (
    <Page pageName="Photos">
      <ContentPanel>
        <div itemScope itemType="http://schema.org/ImageGallery">
          <Gallery>
            {photos?.map((photo, index) => {
              return (
                <GalleryItem key={index}>
                  <div
                    className="Photo-wrapper"
                    onClick={() => setHighres(photo)}
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
            })}
          </Gallery>
        </div>
      </ContentPanel>
      {highres && renderModal(highres)}
    </Page>
  );
};

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
