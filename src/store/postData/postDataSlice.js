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



// export const postRequest = () => ({
//   type: POST_REQUEST,
// })


// export const postRequestSuccess = (data) => ({
//   type: POST_REQUEST_SUCCESS,
//   postData: data.postData,
//   after: data.after,
// })

// export const postRequestSuccessAfter = (data) => ({
//   type: POST_REQUEST_SUCCESS_AFTER,
//   postData: data.postData,
//   after: data.after,
// })

// export const postRequestError = (error) => ({
//   type: POST_REQUEST_ERROR,
//   error,
// })




export const postDataSlice = createSlice({
  name: 'comments',
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
      console.log(action.payload);
      console.log(action.payload.postData);
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
    },
    changePage: (state, action) => {
      console.log('action: ', action);
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.countRequest = 0;
    }
  },
  extraReducers: {}
});


export default postDataSlice.reducer;

