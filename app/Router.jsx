import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';
import Agenda from './pages/Agenda/Agenda';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/bio', component: Bio },
      { path: '/agenda', component: Agenda },
      { path: '*', component: Home },
    ];
  }

  render() {
    const listRoutes = this.routes.map(route => (
      <Route
        exact
        key={route.path}
        path={route.path}
        component={route.component}
      />
    ));

    return (
      <Switch>{listRoutes}</Switch>
    );
  }
}

export default Router;
