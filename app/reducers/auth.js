import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
};

export default handleActions({
  LOGIN: {
    next(state, { payload }) {
      const { AccountData } = payload;
      return {
        ...state,
        user: AccountData,
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  default: state => ({
    ...state,
  }),
}, initialState);
