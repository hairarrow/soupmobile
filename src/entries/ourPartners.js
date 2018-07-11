import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.scss';
import '../Containers/IconLibrary';

import Portal from '../Containers/Portal';
import Partners from '../Containers/Partners';

ReactDOM.render(
  <Portal>
    <Partners />
  </Portal>,
  document.getElementById('app'),
);
