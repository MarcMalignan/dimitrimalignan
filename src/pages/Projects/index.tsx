import { Link } from 'react-router-dom';

import ContentPanel from '@components/ContentPanel';
import { Gallery, GalleryItem } from '@components/Gallery';
import Page from '@components/Page';
import './Projects.scss';

const Projects = () => (
  <Page pageName="Projects">
    <ContentPanel>
      <Gallery>
        <GalleryItem className="Project">
          <Link to="/projects/missing-voices">
            <div className="Project-title">Missing Voices</div>
            <img src="/images/projects/missingVoices/banner.jpg" alt="Missing voices" />
          </Link>
        </GalleryItem>
        <GalleryItem className="Project">
          <a href="https://www.bosmansbeyond.com/" target="_blank">
            <div className="Project-title">Bosmans & Beyond</div>
            <img src="/images/projects/bosmansBeyond/banner.jpg" alt="Bosmans & Beyond" />
          </a>
        </GalleryItem>
      </Gallery>
    </ContentPanel>
  </Page>
);

export default Projects;
