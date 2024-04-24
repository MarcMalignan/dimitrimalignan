import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useLocation } from 'react-router';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import { CalendarEvent, Translation } from '@types';
import { formatDate, getData, getLang, sortByDate, translate } from '@utils';
import './Agenda.scss';

const splitEvents = (events: CalendarEvent[]) => {
  const { futureEvents, oldEvents } = events.reduce<{ futureEvents: CalendarEvent[]; oldEvents: CalendarEvent[] }>(
    (data, event) => {
      if (moment().isAfter(event.date)) {
        return { ...data, oldEvents: [...data.oldEvents, event] };
      } else {
        return { ...data, futureEvents: [...data.futureEvents, event] };
      }
    },
    { futureEvents: [], oldEvents: [] }
  );

  return {
    futureEvents: futureEvents.sort(sortByDate),
    oldEvents: oldEvents.sort(sortByDate).reverse(),
  };
};

const LABELS = {
  CONCERT: {
    fr: 'Concert',
    en: 'Concert',
  },
  FESTIVAL: {
    fr: 'Festival',
    en: 'Festival',
  },
  FESTIVAL_CONCERT: {
    fr: 'Festival / Concert',
    en: 'Festival / Concert',
  },
  FESTIVAL_RECITAL: {
    fr: 'Festival / Récital',
    en: 'Festival / Recital',
  },
  MASTERCLASS: {
    fr: 'Masterclass',
    en: 'Masterclass',
  },
  RECITAL: {
    fr: 'Récital',
    en: 'Recital',
  },
};
const FUTURE_LABELS = {
  fr: 'Dates à venir',
  en: 'Upcoming events',
};
const OLD_LABELS = {
  fr: 'Dates passées',
  en: 'Past events',
};

const renderEvents = (events: CalendarEvent[], title: Translation, search: string) => {
  const lang = getLang(search);

  return events && events.length ? (
    <ContentPanel>
      <h1>{translate(search, title)}</h1>
      <ul className="Agenda-list">
        {events.map((event) => {
          const type = translate(search, LABELS[event.type as keyof typeof LABELS]);
          const title = event.title || type;

          return (
            <li
              key={`${event.title}-${event.date}`}
              className="Agenda-list-item"
              itemScope
              itemType="http://schema.org/MusicEvent"
            >
              <div className="Agenda-list-item-type">{type}</div>
              <div className="Agenda-list-item-info">
                <div className="Agenda-list-item-title" itemProp="name">
                  {event.link ? (
                    <a href={event.link} itemProp="url" target="_blank">
                      {title}
                    </a>
                  ) : (
                    title
                  )}
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
              <div className="Agenda-list-item-date">{formatDate(lang, event.date)}</div>
              <meta itemProp="startDate" content={event.date} />
              <meta itemProp="performer" content="Dimitri Malignan" />
            </li>
          );
        })}
      </ul>
    </ContentPanel>
  ) : null;
};

const Agenda = () => {
  const { search } = useLocation();

  const { data } = useQuery({ queryKey: ['agenda'], queryFn: () => getData<CalendarEvent[]>('agenda') });
  const { futureEvents, oldEvents } = splitEvents(data || []);

  return (
    <Page pageName="Agenda">
      {renderEvents(futureEvents, FUTURE_LABELS, search)}
      {renderEvents(oldEvents, OLD_LABELS, search)}
    </Page>
  );
};

export default Agenda;
