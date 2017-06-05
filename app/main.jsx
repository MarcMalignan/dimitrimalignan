import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import './style/Main.scss';

import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/bio' component={Bio}/>
    </Switch>
  </HashRouter>
);

ReactDOM.render((
  <App />
), document.getElementById('root'));
