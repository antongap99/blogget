import axios from "axios";
import { URL_API } from "../../api/const";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSuccess = (commentData) => ({
  type: COMMENT_REQUEST_SUCCESS,
  commentData,
});

export const commentRequestError = (error) => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const requestCommentDataAsync = (postId)  => (dispatch, getState)=> {
  const token = getState().token.token;
  dispatch(commentRequest());
  axios.get(`${URL_API}/comments/${postId}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: postData}) => {
      const [
        { data: {
          children: [{ data: { author, preview: { images: [{ source: { url } }] } } }]
        } },
        { data: {
          children: [{ data: { author: authorComments, body } }]
        } },
      ] = postData

      const commentData = {
        author,
        authorComments,
        url,
        body,
      }

      dispatch(commentRequestSuccess(commentData));
    })
    .catch((err) => {
      console.log(err);
      dispatch(commentRequestError(err));
    })
}