import React from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';

import { StyledHomeHeader } from './StyledHomeHeader';

export function HomeHeader() {
  return (
    <StyledHomeHeader>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Youtube</Button>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Spotify</Button>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Apple Music</Button>
      <Button variant={BUTTON_VARIANTS.PRIMARY}>Deezer</Button>
    </StyledHomeHeader>
  );
}
