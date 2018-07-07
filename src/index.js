import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './Containers/IconLibrary';

import Header from './Components/Header';
import Home from './Containers/Home';


const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
