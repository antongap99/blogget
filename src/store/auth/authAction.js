import axios from "axios";
import { URL_API } from "../../api/const";
import { deleteToken } from "../token/tokenAction";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
})


export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
})

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
})

export const authLogout = () => ({
  type: AUTH_LOGOUT,
  data: {},
})

// асинхронный экшен
export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token
  if (!token) return;
  dispatch(authRequest());
  axios.get(`${URL_API}/api/v1/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  }).then(({ data }) => {
    const img = data.icon_img.replace(/\?.*$/, '');
    const authdata = {
      name: data.name,
      img: img,
    }
    dispatch(authRequestSuccess(authdata));
  }).catch((err) => {
    console.log(err.message);
    dispatch(deleteToken())
    dispatch(authRequestError(err));
  })
}