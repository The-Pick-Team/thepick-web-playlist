import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';

import { AppHeader } from 'app/App/AppHeader/AppHeader';

import { AppFooter } from 'app/App/AppFooter/AppFooter';

import { Home } from 'Home/Home';

import { NewPlaylist } from 'NewPlaylist/NewPlaylist';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <Router basename="/">
      <AppThemeProvider>
        <GlobalStyle />
        <StyledApp>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={NewPlaylist} />
            <Route path="/:id" component={Home} />
          </Switch>
          <AppFooter />
        </StyledApp>
      </AppThemeProvider>
    </Router>
  );
};
