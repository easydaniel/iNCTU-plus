import { handleActions } from 'redux-actions';

const initialState = {
  list: null,
  schedule: null,
};

export default handleActions({
  GET_INFO: (state, action) => ({
    ...state,
    list: action.payload,
  }),
  GET_SCHEDULE: (state, action) => ({
    ...state,
    schedule: action.payload,
  }),
  default: state => ({
    ...state,
  }),
}, initialState);
