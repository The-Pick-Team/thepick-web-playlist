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
  const [error, setError] = useState(null);

  const [playlist, setPlaylist] = useState({});
  const [isSongLoading, setSongIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(
    'https://www.youtube.com/watch?v=G75O4wGiK5c',
  );
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
        defaultValue="https://www.youtube.com/watch?v=G75O4wGiK5c"
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
      /* Fetching song */
      const newSong = await NewPlaylistApi.getSong({ url: inputValue });
      if (newSong.statusCode) {
        setError(newSong);
        return;
      }
      console.log('newSong', newSong);

      /* Creating playlist song is fetched and if no playlist */
      let newPlaylist;
      if (!playlist.id) {
        newPlaylist = await NewPlaylistApi.newPlaylsit();
        if (newPlaylist.statusCode) {
          setError(newSong);
          return;
        }
        console.log('newPlaylist', newPlaylist);
      } else {
        newPlaylist = { ...playlist };
      }

      /* Updating playlist with new song */
      newPlaylist.songs.push(newSong);
      newPlaylist.title = title;
      newPlaylist.total = newPlaylist.songs.length;

      const update = await NewPlaylistApi.updatePlaylsit({
        playlist: { ...newPlaylist },
      });
      console.log('update: ', update);
      console.log('new playlist: ', playlist);

      if (!update.statusCode) {
        setPlaylist({ ...newPlaylist });
      }

      setSongIsLoading(false);
    } catch (err) {
      setError(err);
      setSongIsLoading(false);
      console.log('error', err);
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
