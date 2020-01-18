import PropTypes from 'prop-types';
import React from 'react';
import commons from '../../../commons';
import ContentPanel from '../../../components/ContentPanel/ContentPanel';
import Page from '../../../components/Page/Page';
import './MissingVoices.scss';

const missingVoices = require('../../../../images/missing_voices.jpg');

const MissingVoices = props => {
  const textLabel = {
    fr: "Détails de l'évènement accessibles en cliquant sur l'image ci-dessous.",
    en: 'Access the event details by clicking on the image below.',
  };

  const search = props.location.search;

  return (
    <Page pageName="MissingVoices">
      <ContentPanel>
        <h1>Missing Voices</h1>
        <p>{commons.translate(search, textLabel)}</p>
        <a href="https://www.facebook.com/events/486563595386643/" target="_blank">
          <img src={missingVoices} alt="Missing Voices" />
        </a>
      </ContentPanel>
    </Page>
  );
};

MissingVoices.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

MissingVoices.defaultProps = {
  location: {
    search: '',
  },
};

export default MissingVoices;
