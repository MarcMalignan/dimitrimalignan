import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('bio', bio => {
      this.setState({ bio });
    });
  }

  listParagraphs() {
    const {
      location: { search },
    } = this.props;
    const { bio } = this.state;

    if (!bio) return null;

    const bioParagraphs = commons.translate(search, bio) || [];

    return bioParagraphs.map((p, index) => {
      const innerHtml = { __html: p };
      return <p key={index} dangerouslySetInnerHTML={innerHtml} />;
    });
  }

  render() {
    return (
      <Page pageName="Bio" pageTitle="Biographie">
        <ContentPanel>{this.listParagraphs()}</ContentPanel>
      </Page>
    );
  }
}

Bio.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Bio.defaultProps = {
  location: {
    search: '',
  },
};

export default Bio;
