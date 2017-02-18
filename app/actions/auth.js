import { createAction } from 'redux-actions';
import { Login } from '../api/requests';

export const login = createAction('LOGIN', Login);
