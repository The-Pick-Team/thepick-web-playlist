/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import { HomeApi } from 'Home/homeApi';
import { Playlist } from 'components/Playlist/Playlist';

import { StyledHome } from './StyledHome';

export function Home() {
  const { id } = useParams();
  console.log('id 2 ', id);
  // const urlParams = new URLSearchParams(window.location.search);
  const playlistId = id;

  const [playlist, setPlaylist] = useState({});
  const [isPlaylistLoading, setIsPlaylistLoading] = useState(true);
  const isEmbedShown =
    playlist?.songs?.[0]?.linksByPlatform?.youtube?.title === 'These Eyes';
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
      {isEmbedShown && (
        <iframe
          style={{ position: 'absolute', bottom: 20, right: 20 }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w4fbNPhw6YU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </StyledHome>
  );

  async function getPlaylist() {
    const response = await HomeApi.getPlaylist({ playlistId });
    // console.log('playlist: ', response);
    setPlaylist(response);
    setIsPlaylistLoading(false);
  }
}
