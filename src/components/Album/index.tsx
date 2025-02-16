import { useLocation } from 'react-router';

import Button, { SpotifyButton } from '@components/Button';
import { GalleryItem } from '@components/Gallery';
import { Album as AlbumType } from '@types';
import { translate } from '@utils';

import './Album.scss';

const releaseLabel = {
  fr: 'Sortie :',
  en: 'Release:',
};
const discoverLabel = {
  fr: 'Découvrir le CD',
  en: 'Discover the CD',
};

interface AlbumProps {
  album: AlbumType;
}

const Album = ({ album }: AlbumProps) => {
  const { search } = useLocation();

  return (
    <GalleryItem key={album.title} className="Album">
      <a href={album.link} target="_blank">
        <h2 className="Album-title">{album.title}</h2>
        <img src={album.img} alt={album.title} />
      </a>
      <div className="Album-links">
        {album.link && (
          <a className="Album-link" href={album.link} target="_blank">
            <Button>{translate(search, discoverLabel)}</Button>
          </a>
        )}
        {album.spotifyLink && (
          <a className="Album-link" href={album.spotifyLink} target="_blank">
            <SpotifyButton />
          </a>
        )}
        {!album.link && !album.spotifyLink && album.releaseDate && (
          <div className="Album-release">
            {translate(search, releaseLabel)} {translate(search, album.releaseDate)}
          </div>
        )}
      </div>
    </GalleryItem>
  );
};

export default Album;
