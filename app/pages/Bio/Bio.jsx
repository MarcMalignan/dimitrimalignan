import React from 'react';

import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Bio.data.json';

import './Bio.scss';

const Home = () => {
  const listParagraphs = data.paragraphs.map((p, index) => {
    const innerHtml = { __html: p };
    return (
      <p key={index} dangerouslySetInnerHTML={innerHtml} />
    );
  });

  return (
    <div className="Page Bio">
      <div className="Bio-content">
        <ContentPanel>{listParagraphs}</ContentPanel>
      </div>
    </div>
  );
};

export default Home;
