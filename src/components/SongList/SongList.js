import PropTypes from 'prop-types';
import React from 'react';

import { SERVICES } from 'components/Playlist/PlaylistTabs/PlaylistTabs';

import { Song, songShape } from 'components/Song/Song';

import { StyledSongList, StyledSongListLoading } from './StyledSongList';

export function SongList({ songs, isLoading, activeService }) {
  return (
    <StyledSongList>
      {songs.map((song, index) => {
        return (
          <Song
            key={`${song.name}-${index}`}
            song={
              song &&
              song.linksByPlatform &&
              song.linksByPlatform[activeService]
            }
            index={index}
            activeService={activeService}
          />
        );
      })}
      {isLoading && (
        <StyledSongListLoading>Loading songs...</StyledSongListLoading>
      )}
    </StyledSongList>
  );
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(songShape).isRequired,
  isLoading: PropTypes.bool.isRequired,
  activeService: PropTypes.string,
};

SongList.defaultProps = {
  activeService: SERVICES[0].id,
};
