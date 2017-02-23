import { createAction } from 'redux-actions';
import Api from 'js/api';
import { GetSchedule } from 'js/utils';


export default {
  gets: createAction('GETS_COURSE', Api.Course.gets),
  groups: createAction('GROUPS_COURSE'),
  Time: {
    get: createAction('GET_COURSE_TIME', Api.Course.Time.get),
  },
  Homework: {
    gets: createAction('GETS_COURSE_HOMEWORK', Api.Course.Homework.gets),
  },
  Announcement: {
    gets: createAction('GETS_COURSE_ANNOUNCEMENT', Api.Course.Announcement.gets),
  },
  Schedule: {
    get: createAction('GET_SCHEDULE', GetSchedule),
  },
};
