import React from 'react';

import logo from 'assets/img/thepickbot.svg';

import { StyledAppHeader, StyledLink, StyledLogo } from './StyledAppHeader';

export function AppHeader() {
  return (
    <StyledAppHeader>
      <StyledLink to="/?playlistId=604e30256f17f449f79670d8">
        <StyledLogo src={logo} alt="thepick" />
      </StyledLink>
      <StyledLink to="newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
