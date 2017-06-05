import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';

class Router extends React.Component {
  render () {
    const routes = [
      { path: '/', component: Home },
      { path: '/bio', component: Bio }
    ];

    const listRoutes = routes.map((route) =>
      <Route exact 
        key={route.path} 
        path={route.path} 
        component={route.component} />
    );

    return (
      <HashRouter>
        <Switch>{listRoutes}</Switch>
      </HashRouter>
    )
  }
};

export default Router;
