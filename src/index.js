import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/App/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
