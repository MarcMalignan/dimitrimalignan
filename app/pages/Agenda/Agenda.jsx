import React from 'react';
import moment from 'moment';

import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';
import data from './Agenda.data.json';

import './Agenda.scss';

class Agenda extends React.Component {
  static formatDate(date) {
    const hasTime = date.includes('T');

    let format = 'D MMM YYYY';
    format += hasTime ? ' - HH[h]mm' : '';

    return moment(date).format(format);
  }

  constructor(props) {
    super(props);

    moment.locale('fr');

    this.state = { events: data };
    this.sortData();
    this.computeDates();
  }

  sortData() {
    this.state.events.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
  }

  computeDates() {
    this.state.events.map(event => Object.assign(event, {
      formattedDate: Agenda.formatDate(event.date),
    }));
  }

  listEvents() {
    return this.state.events.map((event, index) => (
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

  render() {
    return (
      <Page pageName="Agenda">
        <ContentPanel>
          <ul className="Agenda-list">{this.listEvents()}</ul>
        </ContentPanel>
      </Page>
    );
  }
}

export default Agenda;
