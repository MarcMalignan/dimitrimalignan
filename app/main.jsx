import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './style/main.scss';

import Nav from './components/Nav/Nav';
import Router from './Router';

ReactDOM.render((
  <HashRouter>
    <div id="app">
      <div id="header">
        <Nav />
      </div>
      <div id="content">
        <Router />
      </div>
    </div>
  </HashRouter>
), document.getElementById('root'));
