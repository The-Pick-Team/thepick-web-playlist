/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import { HomeApi } from 'Home/homeApi';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

export function Home() {
  const { id } = useParams();

  // const urlParams = new URLSearchParams(window.location.search);
  const playlistId = id;

  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);

  useEffect(() => {
    getPlaylist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHome>
      <Playlist
        name={playlist.name}
        totalSongs={playlist.total}
        songs={playlist.songs}
        isLoading={isPlaylistLoading}
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
