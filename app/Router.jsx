import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/bio', component: Bio },
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
