import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
  POSTS_CLEAR,
} from './postDataAction';
const initialState = {
  loading: false,
  postData: [],
  error: '',
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