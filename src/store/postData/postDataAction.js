import axios from "axios";
import { URL_API } from "../../api/const";
import { transformData } from "../../utilities/transformData";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POSTS_CLEAR = 'POSTS_CLEAR';


export const postRequest = () => ({
  type: POST_REQUEST,
})


export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  postData: data,
})

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
})

export const postClear = () => ({
  type: POSTS_CLEAR,
  postData: [],
})


export const postDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  dispatch(postRequest());
  axios.get(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({ data }) => {
      const postData = transformData(data)
      dispatch(postRequestSuccess(postData))
      localStorage.setItem('posts', JSON.stringify(postData));
    })
    .catch((err) => {
      dispatch(postRequestError(err.message))
      console.log(err.message);
    })
}

