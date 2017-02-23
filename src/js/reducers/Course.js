import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initialState = {
  list: null,
  schedule: null,
  semester: null,
};

export default handleActions({
  GETS_COURSE: {
    next(state, { payload }) {
      const { ArrayOfCourseData: { CourseData } } = payload;
      return {
        ...state,
        list: _.keyBy(CourseData, 'CourseId'),
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  GET_COURSE_TIME: {
    next(state, { payload }) {
      const CourseId = payload.request.CourseId
      const { ArrayOfCourseTimeData: { CourseTimeData } } = payload;
      const CourseTime = _.map(CourseTimeData, ({ CourseName, CourseId, ...c }) => c);
      return {
        ...state,
        list: { ...state.list, [CourseId]: { ...state.list[CourseId], CourseTime } },
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  GETS_COURSE_HOMEWORK: {
    next(state, { payload }) {
      const { courseId, listType } = payload.request;
      const { ArrayOfStuHomeworkData: { StuHomeworkData } } = payload;
      const type = ['undone', 'peer', 'overdue', 'done'];
      return {
        ...state,
        list: {
          ...state.list,
          [courseId]: {
            ...state.list[courseId],
            [type[listType - 1]]: _.keyBy(StuHomeworkData, 'HomeworkId'),
          },
        },
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  GETS_COURSE_ANNOUNCEMENT: {
    next(state, { payload }) {
      const { courseId, bulType } = payload.request;
      const { ArrayOfBulletinData: { BulletinData } } = payload;
      const type = ['new', 'old'];
      return {
        ...state,
        list: {
          ...state.list,
          [courseId]: {
            ...state.list[courseId],
            [type[bulType - 1]]: _.keyBy(BulletinData, 'BulletinId'),
          },
        },
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
}, initialState);
