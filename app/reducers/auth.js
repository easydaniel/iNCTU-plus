import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
};

export default handleActions({
  LOGIN: {
    next(state, action) {
      return {
        ...state,
        user: action.payload,
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
