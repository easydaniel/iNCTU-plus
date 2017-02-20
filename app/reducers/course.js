import { handleActions } from 'redux-actions';

const initialState = {
  list: null,
  schedule: null,
  semester: null,
};

export default handleActions({
  GET_INFO: (state, action) => ({
    ...state,
    list: action.payload,
  }),
  GET_SCHEDULE: (state, action) => ({
    ...state,
    schedule: action.payload,
    semester: Object.keys(action.payload)[0],
  }),
  SET_SEMESTER: (state, action) => ({
    ...state,
    semester: action.payload,
  }),
  default: state => ({
    ...state,
  }),
}, initialState);
