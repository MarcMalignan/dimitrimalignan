import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import { Article } from '@types';
import { formatDate, getData, getLang, translate } from '@utils';
import './Presse.scss';

const listParagraphs = (content: string[]) =>
  content.map((p, index) => {
    const innerHtml = { __html: p };
    return <p key={index} dangerouslySetInnerHTML={innerHtml} />;
  });

const Presse = () => {
  const { search } = useLocation();
  const lang = getLang(search);

  const { data: articles } = useQuery({ queryKey: ['presse'], queryFn: () => getData<Article[]>('presse') });

  return (
    <Page pageName="Presse">
      <ContentPanel>
        {articles?.map((article) => {
          const content = translate<string[]>(search, article.content) || [];

          return (
            <div key={article.date} className="Presse-article" itemScope itemType="http://schema.org/Article">
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
                <span className="Presse-article-author" itemProp="author">
                  {article.author}
                </span>
                <span className="Presse-article-date">{formatDate(lang, article.date)}</span>
              </div>
              <blockquote className="Presse-article-content" itemProp="text">
                {listParagraphs(content)}
              </blockquote>
              <meta itemProp="datePublished" content={article.date} />
              <meta itemProp="headline" content={article.source} />
            </div>
          );
        })}
      </ContentPanel>
    </Page>
  );
};

export default Presse;
