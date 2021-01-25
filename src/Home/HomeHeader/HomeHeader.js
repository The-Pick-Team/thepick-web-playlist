import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';

import { StyledHomeHeader } from './StyledHomeHeader';

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
  return (
    <StyledHomeHeader>
      {SERVICES.map((item, index) => (
        <Button
          key={index}
          variant={
            item.id === activeService
              ? BUTTON_VARIANTS.PRIMARY_ACTIVE
              : BUTTON_VARIANTS.PRIMARY
          }
          onClick={() => {
            onTabChange(item);
          }}
        >
          {item.name}
        </Button>
      ))}
    </StyledHomeHeader>
  );
}
