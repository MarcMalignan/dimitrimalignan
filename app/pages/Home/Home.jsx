import PropTypes from 'prop-types';
import React from 'react';

import commons from '../../commons';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import HomeAlert from '../../components/HomeAlert/HomeAlert';
import Page from '../../components/Page/Page';
import { ALBUMS } from '../Music/Music';

const Home = ({ location: { search } }) => {
  const album = ALBUMS[0];

  const links = [
    {
      label: commons.translate(search, {
        fr: 'Découvrir le CD',
        en: 'Discover the CD',
      }),
      url: album.link,
    },
    {
      label: commons.translate(search, {
        fr: 'Ecouter sur Spotify',
        en: 'Listen on Spotify',
      }),
      url: album.spotifyLink,
      className: 'spotify',
    },
  ];

  const title = commons.translate(search, {
    fr: 'Nouvel album disponible !',
    en: 'New album available!',
  });

  const text = commons.translate(search, {
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

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Home.defaultProps = {
  location: {
    search: '',
  },
};

export default Home;
