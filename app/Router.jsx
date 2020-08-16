import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Agenda from './pages/Agenda/Agenda';
import Bio from './pages/Bio/Bio';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Media from './pages/Media/Media';
import MissingVoices from './pages/Projects/subPages/MissingVoices';
import Music from './pages/Music/Music';
import Photos from './pages/Photos/Photos';
import Presse from './pages/Presse/Presse';
import Projects from './pages/Projects/Projects';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [
      { path: '/agenda', component: Agenda },
      { path: '/bio', component: Bio },
      { path: '/contact', component: Contact },
      { path: '/media', component: Media },
      { path: '/music', component: Music },
      { path: '/photos', component: Photos },
      { path: '/presse', component: Presse },
      { path: '/projects', component: Projects },
      { path: '/projects/missing-voices', component: MissingVoices },
      { path: '*', component: Home },
    ];
  }

  render() {
    const listRoutes = this.routes.map(route => (
      <Route exact key={route.path} path={route.path} component={route.component} />
    ));

    return <Switch>{listRoutes}</Switch>;
  }
}

export default Router;
