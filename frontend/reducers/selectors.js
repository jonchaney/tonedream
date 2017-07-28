import { values } from 'lodash';

export const allAlbums = (albums) => values(albums.allAlbums);

export const selectAllTracks = (tracks) => {
  return values(tracks);
};

export const resultsArray = (results) => Object.keys(results).map(key => results[key]);