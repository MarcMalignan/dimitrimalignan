import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Presse.data.json';

class Presse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: data,
    };
  }

  listArticles() {
    return this.state.articles.map((article, index) => (
      <div key={index} className="Presse-article">
        <div className="Presse-article-source">{article.source}</div>
        <div className="Presse-article-author">{article.author}</div>
        <div className="Presse-article-date">{article.date}</div>
        <div className="Presse-article-content">{article.content}</div>
      </div>
    ));
  }

  render() {
    return (
      <Page pageName="Presse">
        <ContentPanel>{this.listArticles()}</ContentPanel>
      </Page>
    );
  }
}

export default Presse;
