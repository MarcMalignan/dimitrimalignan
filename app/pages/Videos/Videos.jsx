import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Video from '../../components/Video/Video';

import './Videos.scss';

class Videos extends React.Component {
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
    const { videos } = this.state;

    if (!videos) return null;
    return videos.map(video => (
      <Video key={video.id} videoId={video.id} title={video.title} date={video.date} type={video.type} />
    ));
  }

  render() {
    return (
      <Page pageName="Videos">
        <ContentPanel>
          <div className="Videos-videos" itemScope itemType="http://schema.org/VideoGallery">
            {this.listVideos()}
          </div>
        </ContentPanel>
      </Page>
    );
  }
}

Videos.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Videos.defaultProps = {
  location: {
    search: '',
  },
};

export default Videos;
