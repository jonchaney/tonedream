export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);

export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: `api/artists`
  })
);


export const createArtist = artist => (
  $.ajax({
    method: 'POST',
    url: 'api/artists',
    data: { artist }
  })
);

export const deleteArtist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/artists/${id}`
  })
);

export const updateArtist = (artist) => (
  $.ajax({
    method: 'PATCH',
    url: `api/artists/${artist.id}`,
    data: {artist}
  })
);

// have not tested this
export const updateFormArtist = (formData, id) => {
  return $.ajax({
    url: `api/artists/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  });
};
