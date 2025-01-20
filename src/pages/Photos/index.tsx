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
          data.map((photo) => {
            const filename = photo.filename.replace(/ /g, '');
            return {
              ...photo,
              filename,
              srcThumb: `/images/gallery/thumbs/${filename}`,
              srcHighres: `/images/gallery/highres/${filename}`,
              srcFullres: `/images/gallery/fullres/${filename}`,
            };
          }) as PhotoWithImage[]
      ),
  });

  console.log('>>>', photos);

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
            {photos?.map((photo) => {
              return (
                <GalleryItem key={photo.filename}>
                  <div
                    className="Photo-wrapper"
                    onClick={() => setHighres(photo)}
                    itemProp="associatedMedia"
                    itemScope
                    itemType="http://schema.org/ImageObject"
                  >
                    <div
                      className="Photo"
                      style={{
                        backgroundImage: `url(${photo.srcThumb})`,
                        backgroundSize: 'cover',
                      }}
                    />
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
