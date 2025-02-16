import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import { Gallery } from '@components/Gallery';
import Page from '@components/Page';
import Video from '@components/Video';
import { Album as AlbumType } from '@types';
import { translate } from '@utils';

import Album from '@components/Album';
import './MissingVoices.scss';

const introLabel1 = {
  fr: 'Missing Voices est une initiative fondée en 2020 par le pianiste français Dimitri Malignan, visant à promouvoir les œuvres et les vies des compositeurs juifs de musique classique assassinés pendant la Shoah, en organisant des concerts et des conférences, en enregistrant leur musique et en organisant des expositions.',
  en: 'Missing Voices is an initiative founded in 2020 by French pianist Dimitri Malignan, aimed at promoting the works and lives of Jewish composers of Classical Music who were murdered in the Shoah, by organising concerts and conferences, recording their music, and curating exhibitions.',
};
const introLabel2 = {
  fr: "Engagé à mettre en lumière la perte irréparable de ces artistes talentueux (et des centaines d'autres qui ont été persécutés, déportés, emprisonnés ou forcés à l'exil) et à réparer un terrible oubli qui les a entourés pendant 80 ans, Dimitri Malignan entend restituer culturellement toute une partie de la culture et de l'histoire juive ainsi qu'européenne, brutalement éradiquées par le régime nazi et leurs collaborateurs. Ces compositeurs ont subi une double peine: leurs vies ont été arrachées dans les conditions les plus atroces et leur musique a ensuite été complètement oubliée.",
  en: 'Committed to shedding light on the irreparable loss of these talented artists (and the hundreds more who were persecuted, deported, imprisoned, or forced into exile) and to fix a terrible oversight that surrounded them for 80 years, Dimitri Malignan intends to culturally restitute an entire pan of Jewish as well as European culture and history that has been brutally suppressed by the Nazi regime and their collaborators. These composers suffered a double penalty: their lives were taken in the most atrocious conditions and their music has been completely forgotten afterwards.',
};
const videoLabel = {
  fr: 'Documentaire réalisé en 2020',
  en: 'Documentary movie produced in 2020',
};
const albumsTitleLabel = {
  fr: 'Nouvelle collection discographique',
  en: 'New CD collection',
};
const albumsLabel = {
  fr: 'Une collection éditée chez les Editions Hortus et co-dirigée par Dimitri Malignan (Missing Voices) et Thomas Tacquet-Fabre (Forum Voix Étouffées) dédiée aux compositeurs victimes du totalitarisme, et en tout premier lieu à ceux qui ont été persécutés par le nazisme, qu’ils soient connus ou méconnus, condamnés au silence ou à l’exil, assassinés ou morts en déportation, victimes de la Shoah.',
  en: 'A collection published by Editions Hortus and co-curated by Dimitri Malignan (Missing Voices) and Thomas Tacquet-Fabre (Forum Voix Étouffées) dedicated to composers who were victims of totalitarianism, with a primary focus on those persecuted by Nazism, whether well-known or lesser-known, condemned to silence or exile, murdered or deported, victims of the Holocaust.',
};
const instagramLabel = {
  fr: 'Suivez Missing Voices sur instagram :',
  en: 'Follow Missing Voices on Instagram:',
};
const instagramLinkLabel = {
  fr: 'cliquez ici',
  en: 'click here',
};

export const ALBUMS: AlbumType[] = [
  {
    title: "Arnold Schönberg - L'arrangeur arrangé",
    link: 'https://www.editionshortus.com/catalogue_fiche.php?prod_id=325',
    spotifyLink:
      'https://open.spotify.com/intl-fr/album/7jZEoKWNcOOnpq7t9lrVsD?highlight=spotify:track:5g6w1CTlBQjMlDaOmLZ27x',
    img: '/images/missingVoices/schonberg_arrangeur_arrange.jpg',
  },
  {
    title: 'Henriëtte Bosmans - Le diable dans la nuit',
    img: '/images/missingVoices/bosmans_diable_nuit.jpg',
    releaseDate: {
      fr: 'Printemps 2025',
      en: 'Spring 2025',
    },
  },
];

const instagramLink = 'https://www.instagram.com/missing.voices/';

const MissingVoices = () => {
  const { search } = useLocation();

  return (
    <Page pageName="MissingVoices">
      <ContentPanel>
        <h1>
          <a href={instagramLink} target="_blank">
            <img src="/images/missingVoices/missing_voices_logo.png" alt="Missing Voices" />
          </a>
        </h1>
        <section>
          <p>{translate(search, introLabel1)}</p>
          <p>{translate(search, introLabel2)}</p>
        </section>

        <section>
          <h2>{translate(search, videoLabel)}</h2>
          <div className="videoWrapper">
            <Video
              videoId="0DbnsYpIv0c"
              title="Missing Voices: The Irreparable Loss Of Jewish Composers In The Shoah"
              date="2020-03-29"
              type="youtube"
            />
          </div>
        </section>

        <section>
          <h2>
            {translate(search, albumsTitleLabel)}
            <br />
            Voix Étouffées - Missing Voices
          </h2>
          <p>{translate(search, albumsLabel)}</p>
          <Gallery>
            {ALBUMS.map((album) => (
              <Album key={album.title} album={album} />
            ))}
          </Gallery>
        </section>

        <section>
          <p className="MissingVoices-InstagramLink">
            {translate(search, instagramLabel)}{' '}
            <a href={instagramLink} target="_blank">
              {translate(search, instagramLinkLabel)}
            </a>
          </p>
        </section>
      </ContentPanel>
    </Page>
  );
};

export default MissingVoices;
