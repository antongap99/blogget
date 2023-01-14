import {
  INCREAMENT_COUNT_REQUEST,
  CLEAR_COUNT_REQUEST,
} from './countRequestAction';
const initialState = {
  countRequest: 0,
}

export const countRequestReducer = (state = initialState, action) => {
  switch (action.type) {
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