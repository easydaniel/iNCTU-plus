import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
};

export default handleActions({
  LOGIN: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  default: state => ({
    ...state,
  }),
}, initialState);
