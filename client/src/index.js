import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.scss';

import * as serviceWorker from './serviceWorker';

//list pages imports before router
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const appRoutes= (
   <Router basename={process.env.PUBLIC_URL}>
       <Switch>
         <Route exact path={`/`} component={Home}/>
      </Switch>
  </Router>

);


ReactDOM.render(appRoutes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
