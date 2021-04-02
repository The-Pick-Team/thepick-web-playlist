import React from 'react';

import { StyledAppHeader, StyledLink } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLink to={false}>thepick</StyledLink>
      <StyledLink to="/newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
