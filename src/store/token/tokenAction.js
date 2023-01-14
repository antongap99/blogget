export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: null,
});

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token: token,
});