export const INCREAMENT_COUNT_REQUEST = 'INCREAMENT_COUNT_REQUEST';
export const CLEAR_COUNT_REQUEST = 'CLEAR_COUNT_REQUEST';

export const IncreamentCountRequest = (count) => ({
  type: INCREAMENT_COUNT_REQUEST,
  countRequest: count,
})

export const clearCountRequest = () => ({
  type: CLEAR_COUNT_REQUEST,
})
