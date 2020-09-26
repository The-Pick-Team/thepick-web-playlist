import PropTypes from 'prop-types';
import React from 'react';

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

export function Song({ song, index }) {
  return (
    <StyledSong>
      {index + 1}
      <StyledSongMeta>
        <p>{song.name}</p>
        <StyledSongDescription>
          {song.artist} * {song.duration}
        </StyledSongDescription>
      </StyledSongMeta>
    </StyledSong>
  );
}

Song.propTypes = {
  index: PropTypes.number.isRequired,
  song: songShape.isRequired,
};
