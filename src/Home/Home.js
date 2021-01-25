import React, { useEffect, useState } from 'react';

import { HomeApi } from 'Home/homeApi';
import { HomeHeader, SERVICES } from 'Home/HomeHeader/HomeHeader';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

const CHUNK_SIZE = 1;

export function Home() {
  const playlistId = window.location.pathname.replace('/', '');
  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);

  const [songs, setSongs] = useState([]);
  const [areSongsLoading, setAreSongsLoading] = useState(true);

  const [activeService, setActiveService] = useState(SERVICES[0].id);

  useEffect(() => {
    getPlaylist();
  }, []);

  useEffect(() => {
    if (
      // songs.length &&
      playlist.total_songs &&
      songs.length < playlist.total_songs
    ) {
      getPlaylistSongs();
    }
  }, [songs.length, playlist.total_songs]);

  const handleTabChange = (service) => {
    setActiveService(service.id);
  };
  return (
    <StyledHome>
      <HomeHeader onTabChange={handleTabChange} activeService={activeService} />
      <Playlist
        name={playlist.title}
        totalSongs={playlist.total_songs}
        songs={songs}
        areSongsLoading={areSongsLoading}
        isLoading={isPlaylistLoading}
        activeService={activeService}
      />
    </StyledHome>
  );

  async function getPlaylist() {
    const response = await HomeApi.getPlaylist({ playlistId });
    setPlaylist(response);
    setIsPlaylistLoading(false);
  }

  async function getPlaylistSongs() {
    setAreSongsLoading(true);
    const response = await HomeApi.getPlaylistSongs({
      offset: songs.length,
      limit: CHUNK_SIZE,
      id: playlistId,
    });
    setSongs((prevState) => [...prevState, ...response]);
    setAreSongsLoading(false);
    console.log('req call', response);
  }
}
