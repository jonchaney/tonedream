export const fetchAlbums = id => {
  let url = 'api/albums';
  if (id) {
    url = `api/artist/${id}/albums`;
  }
  return $.ajax({
    method: 'GET',
    url: url,
  });
};

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

export const deleteAlbum = (artistId, albumId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/artists/${artistId}/albums/${albumId}`
  })
);

export const updateAlbum = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${data.album.id}`,
    data
  })
);

export const updateFormAlbum = (formData, id) => {
  return $.ajax({
    url: `api/albums/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  });
};
