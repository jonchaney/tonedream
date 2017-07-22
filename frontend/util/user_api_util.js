export const updateUser = (user) => {
  console.log(user);
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  });
};