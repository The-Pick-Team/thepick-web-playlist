import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import logo from 'assets/img/thepickbot.svg';

import { StyledAppHeader, StyledLink, StyledLogo } from './StyledAppHeader';

export function AppHeader({ onTabChange, activeService }) {
  const active = useState(0);
  const newId = '';
  return (
    <StyledAppHeader>
      <StyledLink to="/?playlistId=bc27b4db-bc0f-34f9-ae8e-4b72f2d51b60">
        <StyledLogo src={logo} alt="thepick" />
      </StyledLink>
      <StyledLink to="newplaylist">Create Playlist</StyledLink>
    </StyledAppHeader>
  );
}
