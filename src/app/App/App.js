import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';

import { AppHeader } from 'app/App/AppHeader/AppHeader';
import { Home } from 'Home/Home';

import { NewPlaylist } from 'NewPlaylist/NewPlaylist';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <HashRouter basename="/">
      <AppThemeProvider>
        <GlobalStyle />
        <StyledApp>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newplaylist" component={NewPlaylist} />
          </Switch>
        </StyledApp>
      </AppThemeProvider>
    </HashRouter>
  );
};
