import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';
import logo from 'assets/img/thepickbot.svg';

import { StyledHomeHeader, StyledLogo } from './StyledHomeHeader';

export const SERVICES = [
  {
    name: 'Youtube',
    id: 'youtube',
  },
  {
    name: 'Spotify',
    id: 'spotify',
  },
  {
    name: 'Apple Music',
    id: 'appleMusic',
  },
  {
    name: 'Deezer',
    id: 'deezer',
  },
];

export function HomeHeader({ onTabChange, activeService }) {
  const active = useState(0);
  const newId = 'some-id';
  return (
    <StyledHomeHeader>
      <StyledLogo src={logo} alt="" />
      <Link to="new-playlist">Create Playlist</Link>
    </StyledHomeHeader>
  );
}
