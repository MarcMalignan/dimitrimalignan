import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Video from '../../components/Video/Video';
import data from './Media.data.json';

import './Media.scss';

class Media extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: data.videos,
    };
  }

  listVideos() {
    return this.state.videos.map(video => (
      <Video
        key={video.id}
        videoId={video.id}
        title={video.title}
      />
    ));
  }

  render() {
    return (
      <Page pageName="Media">
        <ContentPanel>
          <h1>Vidéos</h1>
          {this.listVideos()}
        </ContentPanel>
      </Page>
    );
  }
}

export default Media;
