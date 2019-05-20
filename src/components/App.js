import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';
import Color from './Color';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route path="/red" component={Red} />
        <Route path="/blue" component={Blue} />
        <Route path="/yellow" component={Yellow} />
        <Route path="/random" component={Color} />
      </Switch>
      </>
    </Router>
  );
}
