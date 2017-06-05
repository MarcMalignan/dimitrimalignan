import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Router from './Router';

import './style/main.scss';

ReactDOM.render((
  <HashRouter>
    <div id="app">
      <Header />
      <div id="content">
        <Router />
      </div>
    </div>
  </HashRouter>
), document.getElementById('root'));
