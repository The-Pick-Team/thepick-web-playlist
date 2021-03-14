import PropTypes from 'prop-types';
import React from 'react';

import { PlaylistName } from 'components/Playlist/PlaylistName/PlaylistName';
import { PlaylistTabs } from 'components/Playlist/PlaylistTabs/PlaylistTabs';
import { SongList } from 'components/SongList/SongList';
import { songShape } from 'components/Song/Song';
/* Image */

import {
  StyledPlaylist,
  StyledPlaylistDescription,
  StyledPlaylistLoading,
} from './StyledPlaylist';

export function Playlist({
  name,
  totalSongs,
  songs,
  isLoading,
  areSongsLoading,
  onTabChange,
  activeService,
}) {
  return (
    <StyledPlaylist>
      {isLoading ? (
        <StyledPlaylistLoading>Loading playlist...</StyledPlaylistLoading>
      ) : (
        <React.Fragment>
          {name && (
            <div>
              <PlaylistName name={name} />
              <StyledPlaylistDescription>
                {totalSongs} songs
              </StyledPlaylistDescription>
              <PlaylistTabs
                onTabChange={onTabChange}
                activeService={activeService}
              />

              <SongList
                songs={songs}
                isLoading={areSongsLoading}
                activeService={activeService}
              />
            </div>
          )}
        </React.Fragment>
      )}
    </StyledPlaylist>
  );
}

Playlist.propTypes = {
  name: PropTypes.string,
  activeService: PropTypes.string.isRequired,
  totalSongs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool.isRequired,
  areSongsLoading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(songShape).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

Playlist.defaultProps = {
  name: '',
  totalSongs: '',
};
