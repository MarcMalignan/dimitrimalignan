import React from 'react';
import { Link } from 'react-router-dom';

import ContentPanel from '../../components/ContentPanel/ContentPanel';
import { Gallery, GalleryItem } from '../../components/Gallery/Gallery';
import Page from '../../components/Page/Page';

import './Projects.scss';

import missingVoicesBanner from '../../../images/projects/missingVoices/banner.jpg';

const Projects = () => (
  <Page pageName="Projects">
    <ContentPanel>
      <Gallery>
        <GalleryItem className="Project">
          <Link to="/projects/missing-voices">
            <div className="Project-title">Missing Voices</div>
            <img src={missingVoicesBanner} alt="Missing voices" />
          </Link>
        </GalleryItem>
      </Gallery>
    </ContentPanel>
  </Page>
);

export default Projects;
