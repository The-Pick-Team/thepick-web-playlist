import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import {
  StyledSong,
  StyledSongDescription,
  StyledSongMeta,
} from './StyledSong';

export const songShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
});

export function Song({ song, index, activeService }) {
  return (
    <StyledSong
      onClick={() => {
        if (song && song.links && song.links.length > 0 && activeService) {
          const res = song.links.find((o) => o.platform.name === activeService);
          window.open(res.url, '_blank');
        }
      }}
    >
      {index + 1}
      <StyledSongMeta>
        <p>{song.title}</p>
        <StyledSongDescription>
          {song.artist_name} * {song.duration}
        </StyledSongDescription>
      </StyledSongMeta>
    </StyledSong>
  );
}

Song.propTypes = {
  index: PropTypes.number.isRequired,
  song: songShape.isRequired,
  activeService: PropTypes.string.isRequired,
};
