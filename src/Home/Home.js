import React, { useEffect, useState } from 'react';

import { HomeApi } from 'Home/homeApi';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

const CHUNK_SIZE = 1;

export const SERVICES = [
  {
    name: 'Youtube',
    id: 'youtube',
  },
  {
    name: 'Spotify',
    id: 'spotify',
  },
  {
    name: 'Apple Music',
    id: 'appleMusic',
  },
  {
    name: 'Deezer',
    id: 'deezer',
  },
];

export function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const playlistId = urlParams.get('playlistId');

  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);

  const [songs, setSongs] = useState([]);
  const [areSongsLoading, setAreSongsLoading] = useState(true);

  const [activeService, setActiveService] = useState(SERVICES[0].id);

  useEffect(() => {
    getPlaylist();
  }, []);

  useEffect(() => {
    if (playlist.total_songs && songs.length < playlist.total_songs) {
      getPlaylistSongs();
    }
  }, [songs.length, playlist.total_songs]);

  const handleTabChange = (service) => {
    setActiveService(service.id);
  };
  return (
    <StyledHome>
      <Playlist
        name={playlist.title}
        totalSongs={playlist.total_songs}
        songs={songs}
        areSongsLoading={areSongsLoading}
        isLoading={isPlaylistLoading}
        activeService={activeService}
        onTabChange={handleTabChange}
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
