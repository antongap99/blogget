import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../api/const";
import { transformData } from "../../utilities/transformData";
import { increamentCountRequest } from "../countRequst/countRequestAction";
import { postDataSlice } from './postDataSlice'


export const postDataRequestAsync = createAsyncThunk('posts/fetch', (newPage, { getState, dispatch }) => {
  let page = getState().postData.page;


  if ( page !== newPage) {
    page = newPage;
    dispatch(postDataSlice.actions.changePage(page));
  }

  const token = getState().token.token;
  const after = getState().postData.after;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast;
  const countRequest = getState().countRequest.countRequest;


  if (!token || loading || isLast || !page || countRequest === 2 || window.location.pathname.includes('search')) return;

  return axios.get(`${URL_API}/${page}?limit=12&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
    .then(({ data }) => {
      if (after) {
        dispatch(postDataSlice.actions.postRequestSuccessAfter(transformData(data)))
        dispatch(increamentCountRequest(countRequest + 1))
      } else {
        dispatch(postDataSlice.actions.postRequestSuccess(transformData(data)))
      }
    })
    .catch((err) => {
      console.log(err.message);
    })
})


export const searchPostsRequestAsync = createAsyncThunk('searchPosts/fetch', (keyword, { getState, dispatch }) => {
  const token = getState().token.token;
  const postData = getState().postData.postData;
  const loading = getState().postData.loading;
  const isLast = getState().postData.isLast;
  const countRequest = getState().countRequest.countRequest;
  const after = getState().postData.after;

  if (!token || loading || isLast || !keyword || countRequest === 2) return;
  if(postData.length !== 0) dispatch(postDataSlice.actions.postClear());

  return axios.get(`${URL_API}/search?q=${keyword}&limit=10`, {
    headers: {
      Authorization: `bearer ${token}`,
    }
  })
  .then(({ data }) => {
    if (after) {
      dispatch(postDataSlice.actions.searchPostSuccessAfter(transformData(data)))
      dispatch(increamentCountRequest(countRequest + 1))
    } else {
      dispatch(postDataSlice.actions.searchPostSuccess(transformData(data)));
    }

  })
  .catch((err) => {
    console.log(err.message);
  })
})

