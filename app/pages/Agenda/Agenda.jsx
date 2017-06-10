import React from 'react';
import moment from 'moment';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Agenda.data.json';

import './Agenda.scss';

class Agenda extends React.Component {
  static sortEvents(events) {
    return events.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
  }

  static computeDates(events) {
    return events.map(event => Object.assign(event, {
      formattedDate: Agenda.formatDate(event.date),
    }));
  }

  static splitEvents(events) {
    const splitted = {
      futureEvents: [],
      oldEvents: [],
    };

    events.forEach((e) => {
      if (moment().isAfter(e.date)) {
        splitted.oldEvents.push(e);
      } else {
        splitted.futureEvents.push(e);
      }
    });

    return splitted;
  }

  static formatDate(date) {
    const hasTime = date.includes('T');

    let format = 'D MMM YYYY';
    format += hasTime ? ' - HH[h]mm' : '';

    return moment(date).format(format);
  }

  static listEvents(events) {
    return events.map((event, index) => (
      <li key={index} className="Agenda-list-item">
        <div className="Agenda-list-item-type">{event.type}</div>
        <div className="Agenda-list-item-info">
          <div className="Agenda-list-item-title">
            {event.link ?
              <a href={event.link} target="_blank">{event.title}</a> :
              event.title || event.type
            }
          </div>
          <div className="Agenda-list-item-location">{event.location}</div>
        </div>
        <div className="Agenda-list-item-date">{event.formattedDate}</div>
      </li>
    ));
  }

  static renderEvents(events, title) {
    return events.length ? (
      <ContentPanel>
        <h1>{title}</h1>
        <ul className="Agenda-list">{Agenda.listEvents(events)}</ul>
      </ContentPanel>
    ) : null;
  }

  constructor(props) {
    super(props);

    moment.locale('fr');

    this.state = {
      futureEvents: [],
      oldEvents: [],
    };

    let events = Agenda.sortEvents(data);
    events = Agenda.computeDates(events);

    this.state = Agenda.splitEvents(events);
  }

  render() {
    return (
      <Page pageName="Agenda">
        {Agenda.renderEvents(this.state.futureEvents, 'Dates à venir')}
        {Agenda.renderEvents(this.state.oldEvents, 'Dates passées')}
      </Page>
    );
  }
}

export default Agenda;
