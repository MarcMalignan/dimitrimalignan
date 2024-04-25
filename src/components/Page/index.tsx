import classNames from 'classnames';
import { PropsWithChildren, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import './Page.scss';

interface PageProps {
  pageName: string;
  pageTitle?: string;
}

const getTitle = (pageName: string, pageTitle?: string) => {
  const page = pageTitle || pageName;
  return `Dimitri Malignan${page === 'Home' ? '' : ` - ${page}`}`;
};

const getDescription = (pageName: string) => {
  // TODO : add descriptions for all pages
  switch (pageName) {
    case 'Bio':
      return '';
    case 'Projects':
      return '';
    case 'Photos':
      return '';
    case 'Media':
      return '';
    case 'Presse':
      return '';
    case 'Agenda':
      return '';
    case 'Contact':
      return '';
    case 'MissingVoices':
      return '';
    default:
      return "Site officiel de Dimitri Malignan, Pianiste français né en 1998, Prix Cortot de l'Ecole Normale de Musique de Paris, lauréat de nombreux concours internationaux";
  }
};

const Page = ({ children, pageName, pageTitle }: PageProps & PropsWithChildren) => {
  const scrollTop = () => document.getElementById('content')?.scrollTo(0, 0);

  useState(() => {
    scrollTop();
  });

  return (
    <>
      <Helmet>
        <title>{getTitle(pageName, pageTitle)}</title>
        <meta name="description" content={getDescription(pageName)} />
      </Helmet>
      <div className={classNames('Page', pageName)}>
        <div className="Page-content">{children}</div>
      </div>
    </>
  );
};

export default Page;
