import { createAction } from 'redux-actions';
import Api from 'js/api';

export default {
  post: createAction('POST_SESSION', Api.Session.post),
};
