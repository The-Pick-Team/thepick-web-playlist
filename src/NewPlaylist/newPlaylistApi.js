export class NewPlaylistApi {
  static getPlaylist({ playlistId }) {
    // console.log('playlistId', playlistId);
    return fetch(
      `https://thepick.saport.io/api/playlists/${playlistId}`,
    ).then((response) => response.json());
  }

  static getSong({ url }) {
    const encodedUrl = encodeURIComponent(url);
    return fetch(
      `http://35.190.112.131/songs?songUrl=${encodedUrl}`,
    ).then((response) => response.json());
  }
}
