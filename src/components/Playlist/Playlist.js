import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
  const [songsUpdated, setSongsUpdated] = useState([]);

  function handleTabChange(tab) {
    setActiveService(tab);
  }

  useEffect(() => {
    let mounted = true;
    function handleSong(song) {
      let pick;
      if (song && song.linksByPlatform && song.linksByPlatform[activeService]) {
        pick = song.linksByPlatform[activeService];
        pick.noSuchPlatform = false;
      } else {
        const key = Object.keys(song.linksByPlatform)[0];
        pick = song.linksByPlatform[key];
        pick.noSuchPlatform = true;
      }
      return pick;
    }
    if (mounted) {
      const processsedSongs = [];
      if (songs) {
        songs.forEach((element) => {
          console.log('el: ', handleSong(element));
          processsedSongs.push(handleSong(element));
        });
        setSongsUpdated(processsedSongs);
      }
    }

    return () => {
      mounted = false;
    };
    // setSongsUpdated(processsedSongs);
  }, [songs, activeService, setSongsUpdated]);

  return (
    <StyledPlaylist>
      {isLoading ? (
        <StyledPlaylistLoading>Loading playlist...</StyledPlaylistLoading>
      ) : (
        <React.Fragment>
          {songs.length && (
            <div>
              <PlaylistName name={name} playlistUrl={window.location.href} />
              <StyledPlaylistDescription>
                {totalSongs} songs
              </StyledPlaylistDescription>
              <PlaylistTabs
                songs={songs}
                onTabChange={handleTabChange}
                activeService={activeService}
              />
              {songsUpdated && songsUpdated.length > 0 && (
                <SongList
                  songs={songsUpdated}
                  isLoading={areSongsLoading}
                  activeService={activeService}
                />
              )}
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
