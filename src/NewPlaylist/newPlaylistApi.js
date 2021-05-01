const endpoint = 'https://api.thepick.space/api/';

export class NewPlaylistApi {
  static getPlaylist({ url }) {
    const encodedUrl = encodeURIComponent(url);
    return fetch(
      `${endpoint}songs/list?playlistUrl=${encodedUrl}`,
    ).then((response) => response.json());
  }

  static getSong({ url }) {
    const encodedUrl = encodeURIComponent(url);
    return fetch(`${endpoint}songs?songUrl=${encodedUrl}`).then((response) =>
      response.json(),
    );
  }

  static newPlaylsit() {
    return fetch(`${endpoint}playlists`, { method: 'POST' }).then((response) =>
      response.json(),
    );
  }

  static updatePlaylsit({ playlist }) {
    return fetch(`${endpoint}playlists`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playlist),
    }).then((response) => response.json());
  }
}

// createPlaylist
