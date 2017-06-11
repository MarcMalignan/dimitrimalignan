import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Bio.data.json';

import './Bio.scss';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: data,
    };
  }

  listParagraphs() {
    return this.state.bio.map((p, index) => {
      const innerHtml = { __html: p };
      return (
        <p key={index} dangerouslySetInnerHTML={innerHtml} />
      );
    });
  }

  render() {
    return (
      <Page pageName="Bio">
        <ContentPanel>{this.listParagraphs()}</ContentPanel>
      </Page>
    );
  }
}

export default Bio;
