import React from 'react';

import logo from 'assets/img/thepickbot.svg';

import { StyledAppHeader, StyledLink, StyledLogo } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLink to="/?playlistId=604f8f939a267503103f3af6">
        thepick
      </StyledLink>
      <StyledLink to="newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
