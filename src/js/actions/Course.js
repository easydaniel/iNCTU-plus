import { createAction } from 'redux-actions';
import Api from 'js/api';

export default {
  gets: createAction('GETS_COURSE', Api.Course.gets),
  Time: {
    get: createAction('GET_COURSE_TIME', Api.Course.Time.get),
  },
  Homework: {
    gets: createAction('GETS_COURSE_HOMEWORK', Api.Course.Homework.gets),
  },
};
