import { useLocation } from 'react-router';

import { Gallery, GalleryItem } from '@components/Gallery';
import Page from '@components/Page';
import { Album } from '@types';
import { translate } from '@utils';
import ContentPanel from '../../components/ContentPanel';
import './Music.scss';

export const ALBUMS: Album[] = [
  {
    title: 'J.S. Bach - Peregrinations',
    link: 'https://www.editionshortus.com/catalogue_fiche.php?prod_id=279',
    spotifyLink: 'https://open.spotify.com/album/0Mc7ekom9Msikjrrqz1u0l?si=Nzv-IHnpTduOQfcz6oc91A',
    img: '/images/music/albumBach.jpg',
  },
  {
    title: 'Schumann / Prokofiev',
    link: 'http://www.passavantmusictest.fr/produit/dimitri-malignan-robert-schumann-serge-prokofiev',
    spotifyLink: 'https://open.spotify.com/album/7zkkAFajFz8NUJF5EDS5vy?si=ZIVU7kZyT1-H7IJGXIrSnQ',
    img: '/images/music/albumProkofiev.jpg',
  },
];

const DISOVER_LABEL = {
  fr: 'Découvrir le CD',
  en: 'Discover the CD',
};
const LISTEN_LABEL = {
  fr: 'Ecouter sur Spotify',
  en: 'Listen on Spotify',
};

const Music = () => {
  const { search } = useLocation();

  return (
    <Page pageName="Music">
      <ContentPanel>
        <Gallery>
          {ALBUMS.map(({ title, link, spotifyLink, img }) => (
            <GalleryItem key={title} className="Album">
              <a href={link} target="_blank">
                <div className="Album-title">{title}</div>
                <img src={img} alt={title} />
              </a>
              <div className="Album-links">
                <a className="Album-link" href={link} target="_blank">
                  <button type="button">{translate(search, DISOVER_LABEL)}</button>
                </a>
                <a className="Album-link" href={spotifyLink} target="_blank">
                  <button type="button" className="spotify">
                    {translate(search, LISTEN_LABEL)}
                  </button>
                </a>
              </div>
            </GalleryItem>
          ))}
        </Gallery>
      </ContentPanel>
    </Page>
  );
};

export default Music;
