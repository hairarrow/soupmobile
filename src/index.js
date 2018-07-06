import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './Containers/IconLibrary';

import Home from './Containers/Home';


const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
