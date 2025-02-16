import Album from '@components/Album';
import { Gallery } from '@components/Gallery';
import Page from '@components/Page';
import { Album as AlbumType } from '@types';
import ContentPanel from '../../components/ContentPanel';

export const ALBUMS: AlbumType[] = [
  {
    title: 'Elegies and Echoes',
    link: 'http://www.shevacollection.co.uk/modules/myalbum/photo.php?lid=250',
    spotifyLink: 'https://open.spotify.com/intl-fr/album/2thhCytpOyKOh58CjKv54r',
    img: '/images/music/albumElegiesEchoes.jpg',
  },
  {
    title: 'Pál Hermann: Complete Surviving Music, Volume Three',
    link: 'https://toccataclassics.com/product/pal-hermann-complete-surviving-music-volume-three-chamber-instrumental-and-vocal-music/',
    spotifyLink: 'https://open.spotify.com/intl-fr/album/4bWMx0rzXnxfpsy35MfWxO',
    img: '/images/music/albumPalHermann.jpg',
  },
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

const Music = () => {
  return (
    <Page pageName="Music">
      <ContentPanel>
        <Gallery>
          {ALBUMS.map((album) => (
            <Album key={album.title} album={album} />
          ))}
        </Gallery>
      </ContentPanel>
    </Page>
  );
};

export default Music;
