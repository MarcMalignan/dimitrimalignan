import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
      <Switch>{listRoutes}</Switch>
    )
  }
};

export default Router;
