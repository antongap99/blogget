import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  status: '',
  postData: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  loading: false,
}


export const postDataSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsUpdate: (state, action) => {
      state.postData = action.payload.postdata
    },
    postRequest: (state) => {
      state.status = 'pending'
      state.error = {};
      state.loading = true;
    },
    postRequestSuccess: (state, action) => {
      state.status = 'laoded';
      state.loading = false;
      state.postData = action.payload.postData;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postRequestSuccessAfter: (state, action) => {
      state.status = 'laoded'
      state.loading = false;
      state.postData = [...state.postData, ...action.payload.postData];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    postRequestError: (state, action) => {
      state.status = 'error';
      state.loading = false;
      state.error = action.payload.error;
    },
    postClear: (state) => {
      state.loading = false;
      state.postData = [];
      state.countRequest = 0;
      state.after = '';
      state.isLast = false;
    },
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.countRequest = 0;
    },
    searchPostSuccess: (state, action) => {
      state.status = 'laoded';
      state.loading = false;
      state.postData = action.payload.postData;
      state.after = action.payload.after;
      state.isLast = false;
    },
    searchPostSuccessAfter: (state, action) => {
      state.status = 'laoded'
      state.loading = false;
      state.postData = [...state.postData, ...action.payload.postData];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    deletePost: (state, action) => {
      state.postData = action.payload.newPostData;
    }
  },
});


export default postDataSlice.reducer;

