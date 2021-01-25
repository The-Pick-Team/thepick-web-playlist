export class HomeApi {
  static getPlaylist({ playlistId }) {
    console.log('playlistId', playlistId);
    return fetch(
      `https://thepick.saport.io/api/playlists/${playlistId}`,
    ).then((response) => response.json());
  }

  static getPlaylistSongs({ id, offset, limit }) {
    // ?offset=${offset}&limit=${limit}
    return fetch(
      `https://thepick.saport.io/api/playlists/${id}/psongs?offset=${offset}&limit=${limit}`,
    ).then((response) => response.json());
  }
}
