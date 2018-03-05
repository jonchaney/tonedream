export const updateUser = (user, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: { user }
  });
};

export const updateProfile = (formData, id) => (
  $.ajax({
    url: `api/users/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  })
);

export const getUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};
