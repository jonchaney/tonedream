export const fetchAlbums = data => (
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);


export const createAlbum = data => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data
  })
);

export const deleteAlbum = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);

export const updateAlbum = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${data.album.id}`,
    data
  })
);
