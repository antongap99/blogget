import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
  POSTS_CLEAR,
  POST_REQUEST_SUCCESS_AFTER,
} from './postDataAction';
const initialState = {
  loading: false,
  postData: [],
  error: '',
  after: '',
  isLast: false,
}

export const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        postData: action.postData,
        after: action.after,
        isLast: !action.after,
      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        postData: [...state.postData, ...action.postData],
        after: action.after,
        isLast: !action.after,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case POSTS_CLEAR:
      return {
        ...state,
        loading: false,
        postData: action.postData,
      };

    default:
      return state;
  }

}