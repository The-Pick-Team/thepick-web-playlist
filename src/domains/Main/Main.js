import React, { useEffect, useState } from 'react';

import { MainApi } from 'domains/Main/mainApi';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledMain } from './StyledMain';

const CHUNK_SIZE = 1;

export function Main() {
  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);

  const [songs, setSongs] = useState([]);
  const [areSongsLoading, setAreSongsLoading] = useState(true);

  useEffect(() => {
    getPlaylist();
  }, []);

  useEffect(() => {
    if (songs.length < playlist.totalSongs) {
      getPlaylistSongs();
    }
  }, [songs.length, playlist.totalSongs]);

  return (
    <StyledMain>
      <Playlist
        name={playlist.name}
        songs={songs}
        areSongsLoading={areSongsLoading}
        isLoading={isPlaylistLoading}
      />
    </StyledMain>
  );

  async function getPlaylist() {
    const response = await MainApi.getPlaylist();
    setPlaylist({ name: response.name, totalSongs: response.totalSongs });
    setIsPlaylistLoading(false);
  }

  async function getPlaylistSongs() {
    setAreSongsLoading(true);
    const response = await MainApi.getPlaylistSongs({
      offset: songs.length,
      limit: CHUNK_SIZE,
    });
    setSongs((prevState) => [...prevState, ...response.data]);
    setAreSongsLoading(false);
    console.log('req call', songs);
  }
}
