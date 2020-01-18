import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Router from './Router';
import Footer from './components/Footer/Footer';

import './style/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <div id="app">
      <Header />
      <main id="content">
        <Router />
      </main>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
