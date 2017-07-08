import React from 'react';

import commons from '../../commons';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('bio', (bio) => {
      this.setState({ bio });
    });
  }

  listParagraphs() {
    if (!this.state.bio) return undefined;
    return this.state.bio.map((p, index) => {
      const innerHtml = { __html: p };
      return (
        <p key={index} dangerouslySetInnerHTML={innerHtml} />
      );
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

export default Bio;
