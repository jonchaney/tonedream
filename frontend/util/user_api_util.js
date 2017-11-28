export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
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
