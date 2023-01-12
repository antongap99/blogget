import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
  POSTS_CLEAR,
  POST_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE,
  INCREAMENT_COUNT_REQUEST,
  CLEAR_COUNT_REQUEST,
} from './postDataAction';
const initialState = {
  loading: false,
  postData: [],
  error: '',
  after: '',  
  isLast: false,
  page: '',
  countRequest: 0,
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
        countRequest: 0,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
        countRequest: 0,
      };
      case INCREAMENT_COUNT_REQUEST:
        return {
          ...state,
          countRequest: action.countRequest 
        };
        case CLEAR_COUNT_REQUEST:
          return {
            ...state,
            countRequest: 0,
          };

    default:
      return state;
  }

}