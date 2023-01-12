import axios from "axios";
import { URL_API } from "../../api/const";
import { transformData } from "../../utilities/transformData";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POSTS_CLEAR = 'POSTS_CLEAR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const INCREAMENT_COUNT_REQUEST = 'INCREAMENT_COUNT_REQUEST';
export const CLEAR_COUNT_REQUEST = 'CLEAR_COUNT_REQUEST';

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

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
})

export const IncreamentCountRequest = (count) => ({
  type: INCREAMENT_COUNT_REQUEST,
  countRequest: count,
})

export const clearCountRequest = () => ({
  type: CLEAR_COUNT_REQUEST,
})


export const postDataRequestAsync = (newPage) => (dispatch, getState) => {

  let page = getState().postData.page;
  if(newPage && page !== newPage ) {
     page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast; 
  const countRequest = getState().postData.countRequest;


  if(!token || loading || isLast || !page || countRequest === 2) return;
  dispatch(postRequest());

  axios.get(`${URL_API}/${page}?limit=12&${after ? `after=${after}`: ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({ data }) => {
      if(after){
        dispatch(postRequestSuccessAfter(transformData(data)))
        dispatch(IncreamentCountRequest(countRequest + 1))
      } else {
        dispatch(postRequestSuccess(transformData(data)))
      }
    })
    .catch((err) => {
      dispatch(postRequestError(err.message))
      console.log(err.message);
    })
}

