import React from 'react';
import moment from 'moment';

import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <span>© {moment().format('YYYY')} Dimitri Malignan</span>
  </footer>
);

export default Footer;
