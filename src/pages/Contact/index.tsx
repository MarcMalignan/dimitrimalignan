import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import { Contact as ContactType } from '@types';
import { getData, translate } from '@utils';
import './Contact.scss';

const Contact = () => {
  const { search } = useLocation();

  const { data: contact } = useQuery({ queryKey: ['contact'], queryFn: () => getData<ContactType>('contact') });

  if (!contact) return null;

  const email = `mailto:${contact.email}`;
  const emailManager = `mailto:${contact.emailManager}`;

  const contactMeLabel = {
    fr: 'Me contacter',
    en: 'Contact me',
  };
  const developLabel = {
    fr: 'Ce site est développé et maintenu par',
    en: 'Website developped and managed by',
  };

  return (
    <Page pageName="Contact">
      <ContentPanel>
        <div className="Contact-main">
          <h1>{translate(search, contactMeLabel)}</h1>
          <div className="Contact-main-line">
            <a href={email} target="_blank">
              {contact.email}
            </a>
          </div>
          <div className="Contact-sub">
            <a href={contact.facebook} target="_blank">
              <img src="/images/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href={contact.instagram} target="_blank">
              <img src="/images/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href={contact.spotify} target="_blank">
              <img src="/images/icons/spotify.svg" alt="Spotify" />
            </a>
          </div>
        </div>
      </ContentPanel>
      <ContentPanel>
        <div className="Contact-info">
          <p>
            <span>{translate(search, developLabel)} </span>
            <a href={emailManager} target="_blank">
              Marc Malignan
            </a>
            <span>.</span>
          </p>
        </div>
      </ContentPanel>
    </Page>
  );
};

export default Contact;
