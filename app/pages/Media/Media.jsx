import React from 'react';
import PropTypes from 'prop-types';

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
    commons.getData('media', media => {
      this.setState({ videos: media.videos });
    });
  }

  listVideos() {
    if (!this.state.videos) return null;
    return this.state.videos.map(video => (
      <Video key={video.id} videoId={video.id} title={video.title} date={video.date} type={video.type} />
    ));
  }

  render() {
    const search = this.props.location.search;
    const videosLabel = {
      fr: 'Vidéos',
      en: 'Videos',
    };

    return (
      <Page pageName="Media">
        <ContentPanel>
          <h1>{commons.translate(search, videosLabel)}</h1>
          <div className="Media-videos" itemScope itemType="http://schema.org/VideoGallery">
            {this.listVideos()}
          </div>
        </ContentPanel>
      </Page>
    );
  }
}

Media.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Media.defaultProps = {
  location: {
    search: '',
  },
};

export default Media;
