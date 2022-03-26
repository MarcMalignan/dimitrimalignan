import React from 'react';
import { Link } from 'react-router-dom';

import ContentPanel from '../../components/ContentPanel/ContentPanel';
import { Gallery, GalleryItem } from '../../components/Gallery/Gallery';
import Page from '../../components/Page/Page';

import './Projects.scss';

import imgMissingVoices from '../../../images/projects/missingVoices/banner.jpg';
import imgBosmansBeyond from '../../../images/projects/bosmansBeyond/banner.jpg';

const Projects = () => (
  <Page pageName="Projects">
    <ContentPanel>
      <Gallery>
        <GalleryItem className="Project">
          <Link to="/projects/missing-voices">
            <div className="Project-title">Missing Voices</div>
            <img src={imgMissingVoices} alt="Missing voices" />
          </Link>
        </GalleryItem>
        <GalleryItem className="Project">
          <a href="https://www.bosmansbeyond.com/" target="_blank">
            <div className="Project-title">Bosmans & Beyond</div>
            <img src={imgBosmansBeyond} alt="Bosmans & Beyond" />
          </a>
        </GalleryItem>
      </Gallery>
    </ContentPanel>
  </Page>
);

export default Projects;
