import { createSlice } from "@reduxjs/toolkit";
import { requestCommentDataAsync } from "./commentAction";

const initialState = {
  comment: 'Привет redux',
  status: '',
  commentData: {},
  error: {},
}

// выглядит так , будто мы мутируем state,  
// на самом деле новый state создается под капотом и туда записываются педеданные поля
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    updateComment: (state, action) => {
      state.comment = action.payload.comment;
    },
     
    clearCommentData: (state) => {
      state.status = '';
      state.commentData = {};
    }, 
  },
  extraReducers: {
    [requestCommentDataAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    }, 
    [requestCommentDataAsync.fulfilled.type]: (state, action) => {
      state.status =  'loaded';
      state.commentData =  action.payload.commentData;
    }, 
    [requestCommentDataAsync.rejected.type]: (state, action) => {
      state.status =  'error';
      state.error =  action.payload.error;
    },
  }
});



export default commentsSlice.reducer;