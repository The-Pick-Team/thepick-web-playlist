import React, { useState } from 'react';

import { NewPlaylistApi } from 'NewPlaylist/newPlaylistApi';

import {
  INPUT_VARIANTS,
  TextInput as LinkInput,
} from 'components/TextInput/TextInput';

import { SongList } from 'components/SongList/SongList';

import { PlaylistName } from 'components/Playlist/PlaylistName/PlaylistName';

import { StyledNewPlaylist } from './StyledNewPlaylist';

export function NewPlaylist() {
  const urlParams = new URLSearchParams(window.location.search);
  const playlistId = urlParams.get('playlistId');

  const [playlist, setPlaylist] = useState({});
  const [isSongLoading, setSongIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('New Playlist');

  const [songs, setSongs] = useState([]);
  const [areSongsLoading, setAreSongsLoading] = useState(true);

  return (
    <StyledNewPlaylist>
      <PlaylistName
        editableName
        defaultName={title}
        placeholder="Enter new playlist name"
        onChange={handleTitleChange}
        totalSongs={playlist.totalSongs || '0'}
      />
      <LinkInput
        label="Paste song link"
        placeholder="https://music.youtube.com/watch?v=1lyu1KKwC74"
        variant={INPUT_VARIANTS.PRIMARY}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        showSubmitButton
      />
      {isSongLoading && <span>Fetching the song</span>}
      {songs.length > 0 && (
        <SongList
          name={playlist.title}
          totalSongs={playlist.total_songs}
          songs={songs}
          areSongsLoading={areSongsLoading}
          isLoading={false}
        />
      )}
    </StyledNewPlaylist>
  );
  async function handleSubmit() {
    setSongIsLoading(true);
    try {
      const response = await NewPlaylistApi.getSong({ url: inputValue });
      console.log(response);
      setSongIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }

    // setSongs, setPlaylist
  }

  function handleInputChange(newValue) {
    setInputValue(newValue);
  }

  function handleTitleChange(newValue) {
    setTitle(newValue);
  }
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
