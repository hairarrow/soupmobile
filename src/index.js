import styles from './styles/app.scss';
console.log(styles);

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>
    A whole new world
  </h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
