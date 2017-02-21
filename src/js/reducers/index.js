import { combineReducers } from 'redux';
import Session from './Session';
import { routerReducer as routing } from 'react-router-redux'

export default combineReducers({
  routing,
  Session,
});
