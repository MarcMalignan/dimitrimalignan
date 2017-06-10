import React from 'react';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Agenda.data.json';

import './Agenda.scss';

const Agenda = () => {
  const listEvents = data.map((event, index) => (
    <li key={index} className="Agenda-list-item">
      <div className="Agenda-list-item-header">
        <div className="Agenda-list-item-type">{event.type}</div>
        <div className="Agenda-list-item-title">
          {event.link ?
            <a href={event.link} target="_blank">{event.title}</a> :
            event.title || event.type
          }
        </div>
        <div className="Agenda-list-item-date">{event.date}</div>
      </div>
      <div className="Agenda-list-item-location">{event.location}</div>
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
