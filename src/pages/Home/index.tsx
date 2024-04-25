import { useLocation } from 'react-router';

import { translate } from '@utils';
import ContentPanel from '../../components/ContentPanel';
import HomeAlert, { HomeAlertLink } from '../../components/HomeAlert';
import Page from '../../components/Page';
import { ALBUMS } from '../Music';

const Home = () => {
  const { search } = useLocation();

  const album = ALBUMS[0];

  const links: HomeAlertLink[] = [
    {
      label: translate(search, {
        fr: 'Découvrir le CD',
        en: 'Discover the CD',
      }),
      url: album.link,
    },
    {
      label: translate(search, {
        fr: 'Ecouter sur Spotify',
        en: 'Listen on Spotify',
      }),
      url: album.spotifyLink,
      isSpotify: true,
    },
  ];

  const title = translate(search, {
    fr: 'Nouvel album disponible !',
    en: 'New album available!',
  });

  const text = translate(search, {
    fr: "Pour vous procurer une version dédicacée du CD, veuillez m'écrire via la page de contact.",
    en: 'To get a signed version of the CD, please write to me directly via the contact page.',
  });

  return (
    <Page pageName="Home">
      <ContentPanel>
        <HomeAlert img={album.img} imgAlt={album.title} imgLink={album.link} links={links} title={title} text={text} />
      </ContentPanel>
    </Page>
  );
};

export default Home;
