import PropTypes from 'prop-types';
import React, { useState } from 'react';

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
}) {
  const [activeService, setActiveService] = useState();

  function handleTabChange(platform) {
    console.log('platform', platform);

    setActiveService(platform.id);
  }

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
                songs={songs}
                onTabChange={handleTabChange}
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
  totalSongs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool.isRequired,
  areSongsLoading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(songShape).isRequired,
};

Playlist.defaultProps = {
  name: '',
  totalSongs: '',
};
