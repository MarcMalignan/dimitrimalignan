/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import HomeAlert from '../../components/HomeAlert/HomeAlert';

const Home = (props) => {
  const albumImg = require('../../../images/album.jpg');
  const albumTitle = 'Dimitri Malignan - Robert Schumann / Serge Prokofiev';
  const albumLink = 'http://www.passavantmusictest.fr/produit/dimitri-malignan-robert-schumann-serge-prokofiev';

  const search = props.location.search;
  const titleLabel = {
    fr: 'Nouveau CD disponible',
    en: 'New CD available',
  };
  const discoverLinkLabel = {
    fr: 'Découvrir le CD',
    en: 'Discover the CD',
  };

  const links = [
    { label: commons.translate(search, discoverLinkLabel), url: albumLink },
  ];

  return (
    <Page pageName="Home">
      <ContentPanel>

        <HomeAlert
          img={albumImg}
          imgAlt={albumTitle}
          imgLink={albumLink}
          links={links}
          title={commons.translate(search, titleLabel)}
        />

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
