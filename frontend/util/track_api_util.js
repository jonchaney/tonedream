export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: `api/tracks`,
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
    url: `api/tracks/${data.track.id}`,
    data
  })
);

export const updateFormTrack = (formData, id) => {
  return $.ajax({
    url: `api/tracks/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  });
};

export const addTrack = (formData) => {
  return $.ajax({
    url: 'api/tracks',
    type: 'POST',
    processData: false,
    contentType: false,
    data: formData,
  });
};
