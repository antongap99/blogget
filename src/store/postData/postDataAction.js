import axios from "axios";
import { URL_API } from "../../api/const";
import { transformData } from "../../utilities/transformData";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POSTS_CLEAR = 'POSTS_CLEAR';


export const postRequest = () => ({
  type: POST_REQUEST,
})


export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS, 
  postData: data.postData,
  after: data.after,
})

export const postRequestSuccessAfter = (data) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  postData: data.postData,
  after: data.after,
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
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast;  

  if(!token || loading || isLast) return;
  dispatch(postRequest());

  axios.get(`${URL_API}/best?limit=12${after ? `&after=${after}`: ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({ data }) => {
      if(after){
        console.log('after: ', after);
        dispatch(postRequestSuccessAfter(transformData(data)))
      }else {
        dispatch(postRequestSuccess(transformData(data)))
      }
    })
    .catch((err) => {
      dispatch(postRequestError(err.message))
      console.log(err.message);
    })
}

