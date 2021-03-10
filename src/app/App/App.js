import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';

import { AppHeader } from 'app/App/AppHeader/AppHeader';
import { Home } from 'Home/Home';

import { NewPlaylist } from 'NewPlaylist/NewPlaylist';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <Router>
      <AppThemeProvider>
        <GlobalStyle />
        <StyledApp>
          <AppHeader />
          <Switch>
            <Route path="/newplaylist" component={NewPlaylist} />
            <Route exact={true} path="/" component={Home} />
          </Switch>
        </StyledApp>
      </AppThemeProvider>
    </Router>
  );
};
