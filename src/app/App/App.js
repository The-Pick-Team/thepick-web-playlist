import React from 'react';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';
import { Home } from 'Home/Home';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <StyledApp>
        <Home />
      </StyledApp>
    </AppThemeProvider>
  );
};
