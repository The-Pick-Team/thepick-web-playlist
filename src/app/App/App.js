import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import { AppRoutes } from 'app/routes/AppRoutes';
import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { GlobalStyle } from 'app/GlobalStyle';

import { StyledApp } from './StyledApp';

export const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <StyledApp>
          <AppRoutes />
        </StyledApp>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
