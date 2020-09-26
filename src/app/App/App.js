import React from 'react';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';
import { Main } from 'domains/Main/Main';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <StyledApp>
        <Main />
      </StyledApp>
    </AppThemeProvider>
  );
};
