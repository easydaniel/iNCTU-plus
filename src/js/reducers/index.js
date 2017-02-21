import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Session from './Session'

export default combineReducers({
    routing,
    Session
})
