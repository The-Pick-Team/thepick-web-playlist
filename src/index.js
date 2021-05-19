import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/App/App';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-197518751-1'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
