import { handleActions } from 'redux-actions';
import { modiftyData } from '../utils';

const initialState = {
  user: null,
};

export default handleActions({
  LOGIN: {
    next(state, { payload }) {
      const { AccountData } = payload;
      return {
        ...state,
        user: modiftyData(AccountData),
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
