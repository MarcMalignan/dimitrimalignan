import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style/Main.scss';

import Nav from './components/Nav/Nav';
import Router from './Router';

ReactDOM.render((
  <BrowserRouter>
    <div id="app">
      <div id="header">
        <Nav />
      </div>
      <div id="content">
        <Router />
      </div>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
