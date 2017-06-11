import React from 'react';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Presse.data.json';

class Presse extends React.Component {
  static computeDates(articles) {
    return articles.map(article => Object.assign(article, {
      formattedDate: commons.formatDate(article.date),
    }));
  }

  constructor(props) {
    super(props);

    const articles = Presse.computeDates(data);

    this.state = { articles };
  }

  listArticles() {
    return this.state.articles.map((article, index) => (
      <div key={index} className="Presse-article">
        <div className="Presse-article-source">{article.source}</div>
        <div className="Presse-article-author">{article.author}</div>
        <div className="Presse-article-date">{article.formattedDate}</div>
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
