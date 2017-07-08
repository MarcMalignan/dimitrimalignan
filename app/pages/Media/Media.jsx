import React from 'react';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Video from '../../components/Video/Video';

import './Media.scss';

class Media extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('media', (media) => {
      this.setState({ videos: media.videos });
    });
  }

  listVideos() {
    if (!this.state.videos) return null;
    return this.state.videos.map(video => (
      <Video
        key={video.id}
        videoId={video.id}
        title={video.title}
        date={video.date}
      />
    ));
  }

  render() {
    return (
      <Page pageName="Media">
        <ContentPanel>
          <h1>Vidéos</h1>
          <div
            className="Media-videos"
            itemScope
            itemType="http://schema.org/VideoGallery"
          >{this.listVideos()}</div>
        </ContentPanel>
      </Page>
    );
  }
}

export default Media;
