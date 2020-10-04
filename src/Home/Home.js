import React, { useEffect, useState } from 'react';

import { HomeApi } from 'Home/homeApi';
import { HomeHeader } from 'Home/HomeHeader/HomeHeader';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

const CHUNK_SIZE = 1;

export function Home() {
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
    <StyledHome>
      <HomeHeader />
      <Playlist
        name={playlist.name}
        totalSongs={playlist.totalSongs}
        songs={songs}
        areSongsLoading={areSongsLoading}
        isLoading={isPlaylistLoading}
      />
    </StyledHome>
  );

  async function getPlaylist() {
    const response = await HomeApi.getPlaylist();
    console.log(response);
    setPlaylist(response);
    setIsPlaylistLoading(false);
  }

  async function getPlaylistSongs() {
    setAreSongsLoading(true);
    const response = await HomeApi.getPlaylistSongs({
      offset: songs.length,
      limit: CHUNK_SIZE,
    });
    setSongs((prevState) => [...prevState, ...response.data]);
    setAreSongsLoading(false);
    console.log('req call', songs);
  }
}
