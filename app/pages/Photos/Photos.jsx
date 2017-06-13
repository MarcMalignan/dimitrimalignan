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
  }

  listPhotos() {
    return this.state.photos.map((photo, index) => {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const img = require(`../../../images/gallery/thumbs/${photo.filename}`);

      return (
        <div key={index} className="Photos-gallery-item">
          <div className="Photos-gallery-item-wrapper">
            <img src={img} alt="" />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Page pageName="Photos">
        <ContentPanel>
          <div className="Photos-gallery">{this.listPhotos()}</div>
        </ContentPanel>
      </Page>
    );
  }
}

export default Photos;
