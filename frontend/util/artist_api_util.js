export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);


export const createArtist = data => (
  $.ajax({
    method: 'POST',
    url: 'api/artists',
    data
  })
);

export const deleteArtist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/artists/${id}`
  })
);

export const updateAlbum = (artistId, albumId, data) => (
  $.ajax({
    method: 'PATCH',
    url: `api/artists/${artistId}/albums/${albumId}`,
    data
  })
);

// have not tested this
export const updateFormAlbum = (formData, id) => {
  return $.ajax({
    url: `api/albums/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  });
};
