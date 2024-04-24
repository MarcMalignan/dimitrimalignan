import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/en-gb';
import { Lang, Translation } from '@types';

export const sortByDate = (a: any, b: any) => {
  if (a.date < b.date || !a.date) return -1;
  if (a.date > b.date || !b.date) return 1;
  return 0;
};

export const formatDate = (lang: string, date: string) => {
  if (!date) return '';

  const hasTime = date.includes('T');
  const separator = lang === 'fr' ? 'h' : ':';

  let format = 'D MMM YYYY';
  format += hasTime ? ` - HH[${separator}]mm` : '';

  moment.locale(lang);
  return moment(date).format(format);
};

export const getData = <T>(type: string) => {
  // TODO : remove when stable data structure
  const now = Date.now();

  return fetch(
    `https://raw.githubusercontent.com/MarcMalignan/dimitrimalignan-data/master/data/${type}.json?d=${now}`
  ).then((file) => file.json() as T);
};

export const getLang = (search: string) => {
  const searchParams = new URLSearchParams(search);
  return (searchParams.get('lang') as Lang) || Lang.fr;
};

export const translate = <T>(search: string, data: Translation<T>) => {
  const lang = getLang(search);
  return data[lang];
};
