import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

import './Presse.scss';

class Presse extends React.Component {
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
    this.state = {};
  }

  componentDidMount() {
    commons.getData('presse', (articles) => {
      articles.sort(commons.sortByDate).reverse();

      this.setState({ articles });
    });
  }

  listArticles() {
    if (!this.state.articles) return null;

    const search = this.props.location.search;
    const lang = commons.getLang(search);

    return this.state.articles.map((article, index) => {
      const content = commons.translate(search, article.content) || [];

      return (
        <div
          key={index}
          className="Presse-article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="Presse-article-header">
            <span
              className="Presse-article-source"
              itemProp="publisher"
              itemScope
              itemType="http://schema.org/Organization"
            >
              <span itemProp="name">{article.source}</span>
            </span>
            <span className="Presse-article-header-separator"> - </span>
            <span className="Presse-article-author" itemProp="author">{article.author}</span>
            <span className="Presse-article-date">{commons.formatDate(lang, article.date)}</span>
          </div>
          <blockquote className="Presse-article-content" itemProp="text">
            {Presse.listParagraphs(content)}
          </blockquote>
          <meta itemProp="datePublished" content={article.date} />
          <meta itemProp="headline" content={article.source} />
        </div>
      );
    });
  }

  render() {
    return (
      <Page pageName="Presse">
        <ContentPanel>{this.listArticles()}</ContentPanel>
      </Page>
    );
  }
}

Presse.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Presse.defaultProps = {
  location: {
    search: '',
  },
};

export default Presse;
