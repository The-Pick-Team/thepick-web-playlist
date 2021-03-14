/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

import { HomeApi } from 'Home/homeApi';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

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

  const [activeService, setActiveService] = useState(SERVICES[0].id);

  useEffect(() => {
    getPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (playlist.total && songs.length < playlist.total) {
  //     getPlaylistSongs();
  //   }
  // }, [songs.length, playlist.total_songs]);

  const handleTabChange = (service) => {
    setActiveService(service.id);
  };
  return (
    <StyledHome>
      <Playlist
        name={playlist.name}
        totalSongs={playlist.total}
        songs={playlist.songs}
        isLoading={isPlaylistLoading}
        activeService={activeService}
        onTabChange={handleTabChange}
      />
    </StyledHome>
  );

  async function getPlaylist() {
    const response = await HomeApi.getPlaylist({ playlistId });
    // console.log('playlist: ', response);
    setPlaylist(response);
    setIsPlaylistLoading(false);
  }
}
