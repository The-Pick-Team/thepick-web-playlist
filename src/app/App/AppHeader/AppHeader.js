import React from 'react';

import logo from 'assets/img/thepickbot.svg';

import { StyledAppHeader, StyledLink, StyledLogo } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLink to="/?playlistId=604f7ee29a2675204a3f3ae4">
        <StyledLogo src={logo} alt="thepick" />
      </StyledLink>
      <StyledLink to="newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
