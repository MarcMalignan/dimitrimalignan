import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Bio.data.json';

import './Bio.scss';

const Home = () => {
  const listParagraphs = data.map((p, index) => {
    const innerHtml = { __html: p };
    return (
      <p key={index} dangerouslySetInnerHTML={innerHtml} />
    );
  });

  return (
    <Page pageName="Bio">
      <ContentPanel>{listParagraphs}</ContentPanel>
    </Page>
  );
};

export default Home;
