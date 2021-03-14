/* eslint-disable no-use-before-define */
/* eslint-disable dot-notation */
import React, { useEffect, useState } from 'react';

import { NewPlaylistApi } from 'NewPlaylist/newPlaylistApi';

import {
  INPUT_VARIANTS,
  TextInput as LinkInput,
} from 'components/TextInput/TextInput';

import { SongList } from 'components/SongList/SongList';

import { PlaylistName } from 'components/Playlist/PlaylistName/PlaylistName';

import { StyledNewPlaylist } from './StyledNewPlaylist';

export function NewPlaylist() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const playlistId = urlParams.get('playlistId');
  const [error, setError] = useState(null);

  const [playlist, setPlaylist] = useState({});
  const [isSongLoading, setSongIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(
    'https://www.youtube.com/watch?v=G75O4wGiK5c',
  );
  const [name, setName] = useState('New Playlist');

  useEffect(() => {
    // console.log('ma playlist: ', playlist);
  }, [playlist]);
  return (
    <StyledNewPlaylist>
      <PlaylistName
        editableName
        defaultName={name}
        placeholder="Enter new playlist name"
        onChange={handleNameChange}
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
      {error && error.message && <h1>{error.message}</h1>}
      {isSongLoading && <span>Fetching the song</span>}
      {playlist && playlist.songs && playlist.songs.length > 0 && (
        <SongList
          name={playlist.name}
          totalSongs={playlist.total}
          songs={playlist.songs}
          areSongsLoading={false}
          isLoading={false}
        />
      )}
    </StyledNewPlaylist>
  );

  async function handleSubmit() {
    try {
      setSongIsLoading(true);
      /* Fetching song */
      const newSong = await NewPlaylistApi.getSong({ url: inputValue });
      if (newSong.statusCode) {
        setError(newSong);
        return;
      }
      // console.log('newSong', newSong);

      /* Creating playlist song is fetched and if no playlist */
      let newPlaylist;
      if (!playlist['_id']) {
        newPlaylist = await NewPlaylistApi.newPlaylsit();
        if (newPlaylist.statusCode) {
          setError(newSong);
          return;
        }
        // console.log('newPlaylist', newPlaylist);
      } else {
        newPlaylist = { ...playlist };
      }

      /* Updating playlist with new song */
      const linksByPlatform = {};

      Object.keys(newSong.linksByPlatform).forEach((item) => {
        const key = item.includes('youtube') ? 'youtube' : item;

        const platgorm = {
          title: newSong.entitiesByUniqueId[key].title,
          artistName: newSong.entitiesByUniqueId[key].artistName,
          ...newSong.linksByPlatform[key],
        };
        linksByPlatform[key] = { ...platgorm };
      });

      const structuredSong = {
        _id: newSong['_id'],
        linksByPlatform: { ...linksByPlatform },
      };

      // console.log('new playlist before: ', newPlaylist);

      newPlaylist.songs.push(structuredSong);

      /* updating playlist main info */
      newPlaylist.name = name;
      newPlaylist.total = newPlaylist.songs.length;

      // console.log('new playlist after: ', newPlaylist);
      /* PUT playlist in database  */
      const update = await NewPlaylistApi.updatePlaylsit({
        playlist: newPlaylist,
      });
      // console.log('update: ', update);

      if (!update.statusCode) {
        setPlaylist({ ...newPlaylist });
      }

      setSongIsLoading(false);
    } catch (err) {
      setError(err);
      setSongIsLoading(false);
      // console.log('error', err);
    }

    // setSongs, setPlaylist
  }

  function handleInputChange(newValue) {
    setInputValue(newValue);
  }

  async function handleNameChange(newValue) {
    if (playlist.name) {
      playlist.name = newValue;
      setPlaylist({ ...playlist });
      const update = await NewPlaylistApi.updatePlaylsit({
        ...playlist,
      });
      if (update) {
        // do
      }
      // console.log(update);
    }

    setName(newValue);
  }
}
