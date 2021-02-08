import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { PlaylistTabs } from 'components/Playlist/PlaylistTabs/PlaylistTabs';
import { SongList } from 'components/SongList/SongList';
import { songShape } from 'components/Song/Song';

/* Image */
import copy from 'assets/img/copy.svg';

import {
  StyledCheck,
  StyledCopyContainer,
  StyledCopyImage,
  StyledPlaylist,
  StyledPlaylistDescription,
  StyledPlaylistLoading,
  StyledPlaylistName,
  StyledPlaylistNameContainer,
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
  const [copying, setCopying] = useState(false);

  const onCopy = () => {
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 2000);
  };
  return (
    <StyledPlaylist>
      {isLoading ? (
        <StyledPlaylistLoading>Loading playlist...</StyledPlaylistLoading>
      ) : (
        <React.Fragment>
          {name && (
            <div>
              <StyledPlaylistNameContainer>
                <StyledPlaylistName>{name}</StyledPlaylistName>
                <CopyToClipboard text={window.location.href} onCopy={onCopy}>
                  <StyledCopyContainer>
                    <StyledCopyImage src={copy} />
                    {copying && <StyledCheck>copied</StyledCheck>}
                  </StyledCopyContainer>
                </CopyToClipboard>
              </StyledPlaylistNameContainer>

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
  totalSongs: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  areSongsLoading: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(songShape).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

Playlist.defaultProps = {
  name: '',
  totalSongs: '',
};
