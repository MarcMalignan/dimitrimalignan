import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Media.data.json';

class Media extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: data.videos,
    };
  }

  render() {
    return (
      <Page pageName="Media">
        <ContentPanel>
          <h1>Vidéos</h1>
        </ContentPanel>
      </Page>
    );
  }
}

export default Media;
