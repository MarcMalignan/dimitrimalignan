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

  listVideos() {
    return this.state.videos.map((video) => {
      const src = `//www.dailymotion.com/embed/video/${video.id}`;
      return (
        <iframe
          key={video.id}
          title={video.title}
          src={src}
          allowFullScreen="true"
        />
      );
    });
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
