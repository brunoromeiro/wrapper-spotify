import { API_URL } from './config';
import { toJSON } from './utils'

export const search = (query, type) => {
  fetch(`https://${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON);
};
export const searchArtists = (query) => {
  search(query, 'artist');
};
export const searchAlbuns = (query) => {
  search(query, 'album');
};
export const searchTracks = (query) => {
  search(query, 'tracks');
};
export const searchPlaylists = (query) => {
  search(query, 'playlist');
};
