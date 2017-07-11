import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';

export default {
  sortByDate(a, b) {
    if (a.date < b.date || !a.date) return -1;
    if (a.date > b.date || !b.date) return 1;
    return 0;
  },

  formatDate(date) {
    if (!date) return '';

    const hasTime = date.includes('T');

    let format = 'D MMM YYYY';
    format += hasTime ? ' - HH[h]mm' : '';

    moment.locale('fr');
    return moment(date).format(format);
  },

  getData(type, callback) {
    // TODO : remove when stable data structure
    const now = Date.now();

    axios.get(`https://raw.githubusercontent.com/MarcMalignan/dimitrimalignan-data/master/data/${type}.json?d=${now}`)
    .then(file => file.data)
    .then(callback);
  },

  getUrlParams(search) {
    const params = {};
    search.substr(1).split('&').forEach((param) => {
      const [key, value] = param.split('=');
      if (key && value) {
        params[key] = value;
      }
    });
    return params;
  },

  lang(search, data) {
    const urlParams = this.getUrlParams(search);
    const lang = urlParams.lang || 'fr';
    return data[lang];
  },
};
