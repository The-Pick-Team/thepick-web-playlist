import React from 'react';

import { StyledAppHeader, StyledLink, StyledLogo } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLogo>thepick</StyledLogo>
      <StyledLink to="/">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
