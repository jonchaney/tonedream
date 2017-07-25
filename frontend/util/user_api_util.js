export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  });
};

export const updateProfile = (formData, id) => {
  return $.ajax({
    url: `api/users/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    data: formData,
  });
};