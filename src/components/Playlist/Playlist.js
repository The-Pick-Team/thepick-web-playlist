import PropTypes from 'prop-types';
import React from 'react';

import { SongList } from 'components/SongList/SongList';
import { songShape } from 'components/Song/Song';

import {
  StyledPlaylist,
  StyledPlaylistDescription,
  StyledPlaylistLoading,
  StyledPlaylistName,
} from './StyledPlaylist';

export function Playlist({
  name,
  totalSongs,
  songs,
  isLoading,
  areSongsLoading,
}) {
  return (
    <StyledPlaylist>
      {isLoading ? (
        <StyledPlaylistLoading>Loading playlist...</StyledPlaylistLoading>
      ) : (
        <React.Fragment>
          <StyledPlaylistName>{name}</StyledPlaylistName>
          <StyledPlaylistDescription>
            {totalSongs} songs
          </StyledPlaylistDescription>
          <SongList songs={songs} isLoading={areSongsLoading} />
        </React.Fragment>
      )}
    </StyledPlaylist>
  );
}

Playlist.propTypes = {
  name: PropTypes.string,
  totalSongs: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  areSongsLoading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(songShape).isRequired,
};

Playlist.defaultProps = {
  name: '',
  totalSongs: '',
};
