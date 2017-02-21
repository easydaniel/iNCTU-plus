import { createAction } from 'redux-actions';
import { Login } from 'app/api/requests';

export const login = createAction('LOGIN', Login);
