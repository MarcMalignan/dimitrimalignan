import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import { Gallery, GalleryItem } from '../../components/Gallery/Gallery';
import Page from '../../components/Page/Page';

import './Music.scss';

import albumImg from '../../../images/album.jpg';

// TODO: fetch this from data
const albumTitle = 'Robert Schumann / Serge Prokofiev';
const albumLink = 'http://www.passavantmusictest.fr/produit/dimitri-malignan-robert-schumann-serge-prokofiev';
const spotifyLink = 'https://open.spotify.com/album/7zkkAFajFz8NUJF5EDS5vy?si=ZIVU7kZyT1-H7IJGXIrSnQ';

const discoverLinkLabel = {
  fr: 'Découvrir le CD',
  en: 'Discover the CD',
};
const listenLinkLabel = {
  fr: 'Ecouter sur Spotify',
  en: 'Listen on Spotify',
};

const Music = ({ location: { search } }) => (
  <Page pageName="Music">
    <ContentPanel>
      <Gallery>
        <GalleryItem className="Album">
          <a href={albumLink} target="_blank">
            <div className="Album-title">{albumTitle}</div>
            <img src={albumImg} alt={albumTitle} />
          </a>
          <div className="Album-links">
            <a className="Album-link" href={albumLink} target="_blank">
              <button type="button">{commons.translate(search, discoverLinkLabel)}</button>
            </a>
            <a className="Album-link" href={spotifyLink} target="_blank">
              <button type="button" className="spotify">
                {commons.translate(search, listenLinkLabel)}
              </button>
            </a>
          </div>
        </GalleryItem>
      </Gallery>
    </ContentPanel>
  </Page>
);

Music.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Music.defaultProps = {
  location: {
    search: '',
  },
};

export default Music;
