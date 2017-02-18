import { handleActions } from 'redux-actions';

const initialState = {
  list: null,
  schedule: null,
};

export default handleActions({
  GET_INFO: {
    next(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    throw(state) {
      return {
        ...state,
      };
    },
  },
  GET_SCHEDULE: {
    next(state, action) {
      return {
        ...state,
        schedule: action.payload,
      };
    },
    throw(state) {
      return {
        ...state,
      };
    },
  },
  default: state => ({
    ...state,
  }),
}, initialState);
