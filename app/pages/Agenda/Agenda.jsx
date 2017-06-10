import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Agenda.data.json';

const Agenda = () => {
  const listEvents = data.map((event, index) => (
    <li key={index} className="Agenda-list-item">
      <div id="Agenda-list-item-title">{event.title}</div>
      <div id="Agenda-list-item-date">{event.date}</div>
      <div id="Agenda-list-item-location">{event.location}</div>
      {event.link &&
      <div id="Agenda-list-item-link">
        <a href={event.link} target="_blank">{event.link}</a>
      </div>
      }
    </li>
  ));

  return (
    <Page pageName="Agenda">
      <ContentPanel>
        <ul className="Agenda-list">{listEvents}</ul>
      </ContentPanel>
    </Page>
  );
};

export default Agenda;
