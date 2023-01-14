import axios from "axios";
import { URL_API } from "../../api/const";
import { transformData } from "../../utilities/transformData";
import { IncreamentCountRequest } from "../countRequst/countRequestAction";

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POSTS_CLEAR = 'POSTS_CLEAR';
export const CHANGE_PAGE = 'CHANGE_PAGE';


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



export const postDataRequestAsync = (newPage) => (dispatch, getState) => {
 
  let page = getState().postData.page;
  if(newPage && page !== newPage ) {
     page = newPage;
     console.log('1');
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast; 
  const countRequest = getState().countRequest.countRequest;



  if(!token || loading || isLast || !page || countRequest === 2) return;
  dispatch(postRequest());
  console.log('1');
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

