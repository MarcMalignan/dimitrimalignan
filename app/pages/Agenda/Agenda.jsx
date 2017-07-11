import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import commons from '../../commons';
import Page from '../../components/Page/Page';
import ContentPanel from '../../components/ContentPanel/ContentPanel';

import './Agenda.scss';

class Agenda extends React.Component {
  static computeDates(events) {
    return events.map(event => Object.assign(event, {
      formattedDate: commons.formatDate(event.date),
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

  static listEvents(events) {
    return events.map((event, index) => {
      const title = event.title || event.type;

      return (
        <li
          key={index}
          className="Agenda-list-item"
          itemScope
          itemType="http://schema.org/MusicEvent"
        >
          <div className="Agenda-list-item-type">{event.type}</div>
          <div className="Agenda-list-item-info">
            <div
              className="Agenda-list-item-title"
              itemProp="name"
            >
              {event.link ?
                <a href={event.link} itemProp="url" target="_blank">{title}</a> : title
              }
            </div>
            <div
              className="Agenda-list-item-location"
              itemProp="location"
              itemScope
              itemType="http://schema.org/MusicVenue"
            >
              <meta itemProp="name" content={event.location} />
              <meta itemProp="address" content={event.location} />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="Agenda-list-item-date">{event.formattedDate}</div>
          <meta itemProp="startDate" content={event.date} />
          <meta itemProp="performer" content="Dimitri Malignan" />
        </li>
      );
    });
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    commons.getData('agenda', (agenda) => {
      const events = Agenda.computeDates(agenda);
      const splitted = Agenda.splitEvents(events);

      splitted.futureEvents.sort(commons.sortByDate);
      splitted.oldEvents.sort(commons.sortByDate).reverse();

      this.setState({
        futureEvents: splitted.futureEvents,
        oldEvents: splitted.oldEvents,
      });
    });
  }

  renderEvents(events, title) {
    const search = this.props.location.search;

    return events && events.length ? (
      <ContentPanel>
        <h1>{commons.lang(search, title)}</h1>
        <ul className="Agenda-list">{Agenda.listEvents(events)}</ul>
      </ContentPanel>
    ) : null;
  }

  render() {
    const futureEventsLabel = {
      fr: 'Dates à venir',
      en: 'Upcoming events',
    };
    const oldEventsLabel = {
      fr: 'Dates passées',
      en: 'Past events',
    };

    return (
      <Page pageName="Agenda">
        {this.renderEvents(this.state.futureEvents, futureEventsLabel)}
        {this.renderEvents(this.state.oldEvents, oldEventsLabel)}
      </Page>
    );
  }
}

Agenda.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Agenda.defaultProps = {
  location: {
    search: '',
  },
};

export default Agenda;
