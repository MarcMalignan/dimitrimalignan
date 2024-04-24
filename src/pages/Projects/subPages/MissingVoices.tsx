import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import Video from '@components/Video';
import { translate } from '@utils';
import './MissingVoices.scss';

const instagramLabel = {
  fr: 'Suivez le projet sur instagram : ',
  en: 'Follow the project on Instagram: ',
};
const instagramLinkLabel = {
  fr: 'cliquez ici',
  en: 'click here',
};
const textLabel = {
  fr: 'Détails des évènements accessibles en cliquant sur les images ci-dessous.',
  en: 'Access the events details by clicking on the images below.',
};

const MissingVoices = () => {
  const { search } = useLocation();

  return (
    <Page pageName="MissingVoices">
      <ContentPanel>
        <h1>Missing Voices</h1>
        <div className="videoWrapper">
          <Video
            videoId="0DbnsYpIv0c"
            title="Missing Voices: The Irreparable Loss Of Jewish Composers In The Shoah"
            date="2020-03-29"
            type="youtube"
          />
        </div>
        <p>
          {translate(search, instagramLabel)}
          <a href="https://www.instagram.com/missing.voices/" target="_blank">
            {translate(search, instagramLinkLabel)}
          </a>
        </p>
        <p>{translate(search, textLabel)}</p>
        <div className="gallery">
          <div className="gallery-item">
            <a href="https://jck.nl/en/node/4155" target="_blank">
              <img src="/images/projects/missingVoices/concert2.jpg" alt="Missing Voices - Salon Viotta" />
            </a>
          </div>
          <div className="gallery-item">
            <a href="https://www.facebook.com/events/486563595386643/" target="_blank">
              <img
                src="/images/projects/missingVoices/concert1.jpg"
                alt="Missing Voices - Conservatorium van Amsterdam"
              />
            </a>
          </div>
        </div>
      </ContentPanel>
    </Page>
  );
};

export default MissingVoices;
