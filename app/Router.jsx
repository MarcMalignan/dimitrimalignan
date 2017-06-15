import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Agenda from './pages/Agenda/Agenda';
import Bio from './pages/Bio/Bio';
import Media from './pages/Media/Media';
import Photos from './pages/Photos/Photos';
import Presse from './pages/Presse/Presse';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/agenda', component: Agenda },
      { path: '/bio', component: Bio },
      { path: '/media', component: Media },
      { path: '/photos', component: Photos },
      { path: '/presse', component: Presse },
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
