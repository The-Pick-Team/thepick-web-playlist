import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
    name: 'Youtube Music',
    id: 'youtubeMusic',
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
    name: 'Apple Music',
    id: 'itunes',
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

export function PlaylistTabs({ songs, onTabChange, activeService }) {
  const [songPlatforms, setSongPlatforms] = useState([]);
  const [active, setActive] = useState();

  const handleTab = (tab) => {
    setActive(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  useEffect(() => {
    if (songs) {
      const listOfPlatforms = [];
      songs.forEach((song) => {
        if (song.linksByPlatform) {
          Object.keys(song.linksByPlatform).forEach((platformId) => {
            const current = SERVICES.filter(
              (service) => service.id === platformId,
            );
            if (current.length > 0) {
              const isInArray = listOfPlatforms.find(
                (element) => element.id === current[0].id,
              );
              if (!isInArray) {
                listOfPlatforms.push(current[0]);
              }
            }
          });
        }
      });
      setSongPlatforms(listOfPlatforms);
      handleTab(listOfPlatforms[0].id);
    }
  }, [songs, setSongPlatforms]);

  return (
    <StyledPlaylistTabs>
      <StyledPlaylistTabsTitle>
        Select your streaming service
      </StyledPlaylistTabsTitle>
      {active &&
        songPlatforms.map((item, index) => (
          <Button
            key={index}
            variant={
              item.id === activeService
                ? BUTTON_VARIANTS.PRIMARY_ACTIVE
                : BUTTON_VARIANTS.PRIMARY
            }
            onClick={() => {
              handleTab(item.id);
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

PlaylistTabs.propTypes = {
  songs: PropTypes.arrayOf([PropTypes.shape({})]).isRequired,
  onTabChange: PropTypes.func.isRequired,
  activeService: PropTypes.string.isRequired,
};
