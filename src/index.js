import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import './Containers/IconLibrary';

import Home from './Containers/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('app'),
);
