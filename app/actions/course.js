import { createAction } from 'redux-actions';
import { GetCourseInfo } from '../api/requests';
import { GroupBySemester } from '../api/xmlparser';

export const getCourseInfo = createAction('GET_INFO', GetCourseInfo);
export const getSchedule = createAction('GET_SCHEDULE', GroupBySemester);
