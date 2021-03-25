import React from 'react';

import { StyledAppHeader, StyledLink } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLink to="/playlist/60515ff1692e4b0d493b2502">thepick</StyledLink>
      <StyledLink to="/newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
