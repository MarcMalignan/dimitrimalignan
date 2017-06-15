import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
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
    return this.state.videos.map((video) => {
      const src = `//www.dailymotion.com/embed/video/${video.id}`;
      const href = `//www.dailymotion.com/video/${video.id}`;

      return (
        <div key={video.id} className="Videos-list-item">
          <a
            className="Videos-list-item-link"
            href={href}
            target="_blank"
          >{video.title}</a>
          <div className="Videos-list-item-wrapper">
            <iframe
              title={video.title}
              src={src}
              allowFullScreen="true"
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Page pageName="Media">
        <ContentPanel className="Videos">
          <h1>Vidéos</h1>
          <div className="Videos-list">
            {this.listVideos()}
          </div>
        </ContentPanel>
      </Page>
    );
  }
}

export default Media;
