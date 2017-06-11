import React from 'react';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Presse.data.json';

import './Presse.scss';

class Presse extends React.Component {
  static computeDates(articles) {
    return articles.map(article => Object.assign(article, {
      formattedDate: commons.formatDate(article.date),
    }));
  }

  static listParagraphs(content) {
    return content.map((p, index) => {
      const innerHtml = { __html: p };
      return (
        <p key={index} dangerouslySetInnerHTML={innerHtml} />
      );
    });
  }

  constructor(props) {
    super(props);

    const articles = Presse.computeDates(data);

    this.state = { articles };
  }

  listArticles() {
    return this.state.articles.map((article, index) => (
      <div key={index} className="Presse-article">
        <div className="Presse-article-header">
          <span className="Presse-article-source">{article.source}</span>
          <span className="Presse-article-header-separator"> - </span>
          <span className="Presse-article-author">{article.author}</span>
          <span className="Presse-article-date">{article.formattedDate}</span>
        </div>
        <blockquote className="Presse-article-content">
          {Presse.listParagraphs(article.content)}
        </blockquote>
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
