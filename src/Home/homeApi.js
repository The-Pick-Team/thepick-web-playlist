const REQUEST_TIMEOUT = 2000;

const SONGS = [
  { name: 'Test song name 1', artist: 'Test song artist 1', duration: '5.13' },
  { name: 'Test song name 2', artist: 'Test song artist 2', duration: '3.05' },
  { name: 'Test song name 3', artist: 'Test song artist 3', duration: '3.44' },
  { name: 'Test song name 4', artist: 'Test song artist 4', duration: '2.22' },
  { name: 'Test song name 5', artist: 'Test song artist 5', duration: '3.40' },
];

const PLAYLIST = {
  totalSongs: SONGS.length,
  name: 'Test playlist',
};

export class HomeApi {
  static getPlaylist() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ ...PLAYLIST });
      }, REQUEST_TIMEOUT),
    );
  }

  static getPlaylistSongs({ offset, limit }) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ data: SONGS.slice(offset, offset + limit) });
      }, REQUEST_TIMEOUT),
    );
  }
}
