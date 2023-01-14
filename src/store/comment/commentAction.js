import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../api/const";

export const requestCommentDataAsync = createAsyncThunk('comments/fetch', (postId, { getState }) => {
  const token = getState().token.token;
  if (!token) return;

  return axios.get(`${URL_API}/comments/${postId}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: postData }) => {
      const [
        { data: {
          children: [{ data: { author } }]
        } },
        { data: {
          children: [{ data: { author: authorComments, body } }]
        } },
      ] = postData
      const commentData = {
        author,
        authorComments,
        body,
      }

      return {
        commentData,
      }
    })
    .catch((err) => {
      console.log(err);
      return { error: err.message };
    })
})