import {
  UPDATE_COMMENT,
  COMMENT_REQUEST,
  COMMENT_REQUEST_SUCCESS,
  COMMENT_REQUEST_ERROR,
} from "./commentAction";

const initialState = {
  comment: 'Привет redux',
  loading: false,
  commentData: {},
  error: {},
}


export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      }
    case COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: {},
      }
    case COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        commentData: action.commentData,
      }
    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
};