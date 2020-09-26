import PropTypes from 'prop-types';
import React from 'react';

import { Song, songShape } from 'components/Song/Song';

import { StyledSongList, StyledSongListLoading } from './StyledSongList';

export function SongList({ songs, isLoading }) {
  return (
    <StyledSongList>
      {songs.map((song, index) => (
        <Song key={`${song.name}-${index}`} song={song} index={index} />
      ))}
      {isLoading && (
        <StyledSongListLoading>Loading songs...</StyledSongListLoading>
      )}
    </StyledSongList>
  );
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(songShape).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
