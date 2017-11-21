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

export const updateArtist = (id, data) => (
  $.ajax({
    method: 'PATCH',
    url: `api/artists/${id}`,
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
