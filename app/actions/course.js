import { createAction } from 'redux-actions';
import {
  GetCourseList,
  GetCourseTime,
  GetCourseHomework,
  GetCourseAnnouncement,
} from '../api/requests';
import { GetSchedule } from '../utils';

export const getCourseList = createAction('GET_COURSE_LIST', GetCourseList);
export const groupCourseList = createAction('GROUP_COURSE_LIST');
export const getCourseTime = createAction('GET_COURSE_TIME', GetCourseTime);
export const getCourseHomework = createAction('GET_COURSE_HOMEWORK', GetCourseHomework);
export const getCourseAnnouncement = createAction('GET_COURSE_ANNOUNCEMENT', GetCourseAnnouncement);
export const getSchedule = createAction('GET_SCHEDULE', GetSchedule);
export const setSemester = createAction('SET_SEMESTER');
