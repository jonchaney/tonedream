import { values } from 'lodash';

export const allAlbums = (albums) => values(albums.allAlbums);

export const selectAllArtists = (artists) => values(artists.allArtists);

export const selectAllArtistsIds = (artists) =>  {
  let arr = values(artists.allArtists);
  let ids = [];
  
  for(let i = 0; i< arr.length; i++) {
    ids.push(arr[i].id);
  }
  return ids;
};

export const selectAllTracks = (tracks) => {
  return values(tracks);
};

export const resultsArray = (results) => Object.keys(results).map(key => results[key]);