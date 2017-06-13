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
      /* eslint-disable global-require, import/no-dynamic-require */
      const thumb = require(`../../../images/gallery/thumbs/${photo.filename}`);
      const fullres = require(`../../../images/gallery/fullres/${photo.filename}`);
      /* eslint-enable global-require, import/no-dynamic-require */

      return (
        <div key={index} className="Photos-gallery-item">
          <a className="Photos-gallery-item-wrapper" href={fullres} target="_blank">
            <img src={thumb} alt="" />
          </a>
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
