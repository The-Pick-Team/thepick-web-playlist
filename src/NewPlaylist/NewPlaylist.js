import React, { useEffect, useState } from 'react';

import { NewPlaylistApi } from 'NewPlaylist/newPlaylistApi';

import { INPUT_VARIANTS, TextInput } from 'components/TextInput/TextInput';

import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledNewPlaylist';

const CHUNK_SIZE = 1;

export function NewPlaylist() {
  const urlParams = new URLSearchParams(window.location.search);
  const playlistId = urlParams.get('playlistId');

  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const [songs, setSongs] = useState([]);
  const [areSongsLoading, setAreSongsLoading] = useState(true);
  const handleSubmit = () => {};
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <StyledHome>
      <TextInput
        label="Paste song link"
        variant={INPUT_VARIANTS.PRIMARY}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      {playlist.length > 0 && (
        <Playlist
          name={playlist.title}
          totalSongs={playlist.total_songs}
          songs={songs}
          areSongsLoading={areSongsLoading}
          isLoading={isPlaylistLoading}
        />
      )}
    </StyledHome>
  );
}

//   async function getPlaylist() {
//     const response = await HomeApi.getPlaylist({ playlistId });
//     setPlaylist(response);
//     setIsPlaylistLoading(false);
//   }

//   async function getPlaylistSongs() {
//     setAreSongsLoading(true);
//     const response = await HomeApi.getPlaylistSongs({
//       offset: songs.length,
//       limit: CHUNK_SIZE,
//       id: playlistId,
//     });
//     setSongs((prevState) => [...prevState, ...response]);
//     setAreSongsLoading(false);
//     console.log('req call', response);
//   }
// }
