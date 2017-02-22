import { combineReducers } from 'redux';
import Course from './Course';
import Session from './Session';
import { routerReducer as routing } from 'react-router-redux'

export default combineReducers({
  routing,
  Course,
  Session,
});
