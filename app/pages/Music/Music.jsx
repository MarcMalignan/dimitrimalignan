import React from 'react';
import PropTypes from 'prop-types';

import commons from '../../commons';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import { Gallery, GalleryItem } from '../../components/Gallery/Gallery';
import Page from '../../components/Page/Page';

import './Music.scss';

import imgProkofiev from '../../../images/music/albumProkofiev.jpg';
import imgBach from '../../../images/music/albumBach.jpg';

const albums = [
  {
    title: 'J.S. Bach - Peregrinations',
    link: 'https://www.editionshortus.com/catalogue_fiche.php?prod_id=279',
    spotifyLink: 'https://open.spotify.com/album/0Mc7ekom9Msikjrrqz1u0l?si=Nzv-IHnpTduOQfcz6oc91A',
    img: imgBach,
  },
  {
    title: 'Schumann / Prokofiev',
    link: 'http://www.passavantmusictest.fr/produit/dimitri-malignan-robert-schumann-serge-prokofiev',
    spotifyLink: 'https://open.spotify.com/album/7zkkAFajFz8NUJF5EDS5vy?si=ZIVU7kZyT1-H7IJGXIrSnQ',
    img: imgProkofiev,
  },
];

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
        {albums.map(({ title, link, spotifyLink, img }) => (
          <GalleryItem className="Album">
            <a href={link} target="_blank">
              <div className="Album-title">{title}</div>
              <img src={img} alt={title} />
            </a>
            <div className="Album-links">
              <a className="Album-link" href={link} target="_blank">
                <button type="button">{commons.translate(search, discoverLinkLabel)}</button>
              </a>
              <a className="Album-link" href={spotifyLink} target="_blank">
                <button type="button" className="spotify">
                  {commons.translate(search, listenLinkLabel)}
                </button>
              </a>
            </div>
          </GalleryItem>
        ))}
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
