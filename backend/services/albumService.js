import { mockAlbums } from '../database/mockAlbums.js';
import { getData, setData } from './storageService.js';

const ALBUMS_KEY = 'music-journal-albums';

export function getAlbums() {
  const albums = getData(ALBUMS_KEY, null);

  if (albums) {
    return albums;
  }

  setData(ALBUMS_KEY, mockAlbums);
  return mockAlbums;
}
