import React, { useState } from 'react';

import { BUTTON_VARIANTS, Button } from 'components/Button/Button';

import spotify from 'assets/img/spotify.svg';
import spotifyActive from 'assets/img/spotifyactive.svg';

import youtube from 'assets/img/youtube.svg';
import youtubeActive from 'assets/img/youtubeactive.svg';

import appleMusic from 'assets/img/applemusic.svg';
import appleMusicActive from 'assets/img/applemusicactive.svg';

import deezer from 'assets/img/deezer.svg';
import deezerActive from 'assets/img/deezeractive.svg';

import {
  StyledImage,
  StyledPlaylistTabs,
  StyledPlaylistTabsTitle,
} from './StyledPlaylistTabs';

export const SERVICES = [
  {
    name: 'Youtube',
    id: 'youtube',
    img: youtube,
    imgActive: youtubeActive,
  },
  {
    name: 'Spotify',
    id: 'spotify',
    img: spotify,
    imgActive: spotifyActive,
  },
  {
    name: 'Apple Music',
    id: 'appleMusic',
    img: appleMusic,
    imgActive: appleMusicActive,
  },
  {
    name: 'Deezer',
    id: 'deezer',
    img: deezer,
    imgActive: deezerActive,
  },
];

export function PlaylistTabs({ onTabChange, activeService }) {
  const active = useState(0);
  return (
    <StyledPlaylistTabs>
      <StyledPlaylistTabsTitle>
        Select your streaming service
      </StyledPlaylistTabsTitle>
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
          <StyledImage
            src={item.id === activeService ? item.imgActive : item.img}
            alt=""
          />
        </Button>
      ))}
    </StyledPlaylistTabs>
  );
}
