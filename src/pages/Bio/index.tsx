import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import { Translation } from '@types';
import { getData, translate } from '@utils';

const listParagraphs = (bio: Translation<string[]>, search: string) => {
  const bioParagraphs = translate<string[]>(search, bio) || [];
  return bioParagraphs.map((p: string) => {
    const innerHtml = { __html: p };
    return <p key={p} dangerouslySetInnerHTML={innerHtml} />;
  });
};

const Bio = () => {
  const { search } = useLocation();

  const { data: bio } = useQuery({ queryKey: ['bio'], queryFn: () => getData<Translation<string[]>>('bio') });

  return (
    <Page pageName="Bio" pageTitle="Biographie">
      <ContentPanel>{bio && listParagraphs(bio, search)}</ContentPanel>
    </Page>
  );
};

export default Bio;
