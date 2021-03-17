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

import {
  StyledNewPlaylist,
  StyledSongListContainer,
} from './StyledNewPlaylist';

export function NewPlaylist() {
  const [error, setError] = useState(null);

  const [playlist, setPlaylist] = useState({});
  const [isSongLoading, setSongIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [name, setName] = useState('New Playlist');
  const [songsUpdated, setSongsUpdated] = useState([]);

  useEffect(() => {
    let mounted = true;
    function handleSong(song) {
      const activeService = Object.keys(song.linksByPlatform)[0];
      let pick;
      if (song && song.linksByPlatform && song.linksByPlatform[activeService]) {
        pick = song.linksByPlatform[activeService];
        pick.disableLink = true;
      }
      return pick;
    }
    if (mounted) {
      const processsedSongs = [];
      if (playlist['_id']) {
        playlist.songs.forEach((element) => {
          processsedSongs.push(handleSong(element));
        });
        setSongsUpdated(processsedSongs);
      }
    }

    return () => {
      mounted = false;
    };
    // setSongsUpdated(processsedSongs);
  }, [playlist, setSongsUpdated]);

  return (
    <StyledNewPlaylist>
      <PlaylistName
        playlistUrl={
          playlist['_id']
            ? `${window.location.origin}/?playlistId=${playlist['_id']}`
            : false
        }
        editableName
        defaultName={name}
        placeholder="Enter new playlist name"
        handleNameChange={handleNameChange}
        totalSongs={playlist.totalSongs || '0'}
      />
      <LinkInput
        label="Paste song link"
        placeholder="https://music.youtube.com/watch?v=1lyu1KKwC74"
        variant={INPUT_VARIANTS.PRIMARY}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        showSubmitButton
        refreshOnSubmit
        disabledSubmit={!inputValue || !inputValue.length > 0 || isSongLoading}
      />
      {error && error.message && <h1>{error.message}</h1>}
      {isSongLoading && <span>Fetching the song</span>}
      {playlist && playlist.songs && playlist.songs.length > 0 && (
        <StyledSongListContainer>
          <SongList
            name={playlist.name}
            totalSongs={playlist.total}
            songs={songsUpdated}
            areSongsLoading={false}
            isLoading={false}
          />
        </StyledSongListContainer>
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
      const linksByPlatformNew = {};
      const { linksByPlatform, entitiesByUniqueId } = newSong;
      // console.log('heya', Object.keys(newSong.linksByPlatform));

      Object.keys(newSong.linksByPlatform).forEach((key) => {
        const info = {
          title: '',
          artistName: '',
        };
        let entitiesKey = key;
        switch (key) {
          case 'youtubeMusic':
            entitiesKey = 'youtube';
            break;
          case 'appleMusic':
            entitiesKey = 'itunes';
            break;
          case 'amazonMusic':
          case 'amazonStore':
            entitiesKey = 'amazon';
            break;
          default:
            entitiesKey = key;
        }
        info.title = entitiesByUniqueId[entitiesKey].title;
        info.artistName = entitiesByUniqueId[entitiesKey].artistName;

        const platform = {
          ...info,
          ...linksByPlatform[key],
        };
        linksByPlatformNew[key] = { ...platform };
      });

      const structuredSong = {
        _id: newSong['_id'],
        linksByPlatform: { ...linksByPlatformNew },
      };
      // console.log('structuredSong', structuredSong);

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
      setInputValue('');
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

  async function handleNameChange(newValue) {
    if (playlist.name) {
      const newPlaylist = { ...playlist };
      newPlaylist.name = newValue;
      setPlaylist({ ...newPlaylist });
      const update = await NewPlaylistApi.updatePlaylsit({
        playlist: newPlaylist,
      });
    }

    setName(newValue);
  }
}
