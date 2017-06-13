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
      const img = require(`../../../images/gallery/fullres/${photo.filename}`);

      return (
        <img key={index} className="Photos-photo" src={img} alt="" />
      );
    });
  }

  render() {
    return (
      <Page pageName="Photos">
        <ContentPanel>{this.listPhotos()}</ContentPanel>
      </Page>
    );
  }
}

export default Photos;
