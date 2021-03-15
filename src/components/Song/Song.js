import PropTypes from 'prop-types';
import React from 'react';

import {
  StyledSong,
  StyledSongDescription,
  StyledSongMeta,
  StyledSongTitle,
} from './StyledSong';

export const songShape = PropTypes.shape({
  duration: PropTypes.string,
  url: PropTypes.string,
  linksByPlatofrm: PropTypes.shape({}), // add shapes
  artistName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export function Song({ song, index }) {
  return (
    <StyledSong
      onClick={() => {
        if (song && song.url) {
          window.open(song.url, '_blank');
        }
      }}
    >
      {index + 1}
      {song && (
        <StyledSongMeta>
          <StyledSongTitle>{song.title}</StyledSongTitle>
          <StyledSongDescription>
            {song.artistName}
            {/* {song.duration ? ` * ${song.duration}` : ''} */}
          </StyledSongDescription>
        </StyledSongMeta>
      )}
    </StyledSong>
  );
}

Song.propTypes = {
  index: PropTypes.number.isRequired,
  song: songShape.isRequired,
};

Song.defaultProps = {};
