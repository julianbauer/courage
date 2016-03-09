import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';

import Html from './components/Html/index.jsx';
import Projekt from './components/Projekt/index.jsx';
import Helfen from './components/Helfen/index.jsx';
import Stories from './components/Stories/index.jsx';
import Kontakt from './components/Kontakt/index.jsx';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Html}>
      <IndexRedirect to="/stories" />
      <Route path="projekt" component={Projekt}/>
      <Route path="helfen" component={Helfen}/>
      <Route path="stories" component={Stories}/>
      <Route path="kontakt" component={Kontakt}/>
    </Route>
  </Router>
), document.body)
