import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Router from './Router';
import Footer from './components/Footer/Footer';

import './style/main.scss';

ReactDOM.render((
  <HashRouter>
    <div id="app">
      <Header />
      <div id="content">
        <Router />
      </div>
      <Footer />
    </div>
  </HashRouter>
), document.getElementById('root'));
