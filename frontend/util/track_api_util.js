export const fetchTracks = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/tracks`,
  })
);

export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);

export const createTrack = data => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data
  })
);

export const deleteTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  })
);

export const updateTrack = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${data.album.id}`,
    data
  })
);