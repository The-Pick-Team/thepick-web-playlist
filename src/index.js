import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/App/App';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-V7JMEKRZNL'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
