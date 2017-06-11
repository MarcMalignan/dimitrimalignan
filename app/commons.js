import moment from 'moment';
import 'moment/locale/fr';

export default {
  formatDate(date) {
    if (!date) return '';

    const hasTime = date.includes('T');

    let format = 'D MMM YYYY';
    format += hasTime ? ' - HH[h]mm' : '';

    moment.locale('fr');
    return moment(date).format(format);
  },
};
