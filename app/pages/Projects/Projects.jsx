import React from 'react';
import { Link } from 'react-router-dom';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import Page from '../../components/Page/Page';
import './Projects.scss';

const missingVoicesBanner = require('../../../images/projects/missingVoices/banner.jpg');

const Projects = () => (
  <Page pageName="Projects">
    <ContentPanel>
      <div className="Projects-layout">
        <Link className="Project" to="/projects/missing-voices">
          <div className="Project-title">Missing Voices</div>
          <img src={missingVoicesBanner} alt="Missing voices" />
        </Link>
      </div>
    </ContentPanel>
  </Page>
);

export default Projects;
