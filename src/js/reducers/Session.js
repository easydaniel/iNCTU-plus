import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  POST_SESSION: {
    next(state, { payload }) {
      return payload.AccountData;
    },
    throw(state, { payload }) {
      return {};
    },
  },
}, initialState);
