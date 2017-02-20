import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initialState = {
  list: null,
  schedule: null,
  semester: null,
};

export default handleActions({
  GET_COURSE_LIST: {
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
      const { ArrayOfCourseTimeData: { CourseTimeData }, CourseId } = payload;
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
  GET_COURSE_HOMEWORK: {
    next(state, { payload }) {
      const { ArrayOfStuHomeworkData: { StuHomeworkData }, courseId, listType } = payload;
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
  GET_COURSE_ANNOUNCEMENT: {
    next(state, { payload }) {
      const { ArrayOfBulletinData: { BulletinData }, courseId, bulType } = payload;
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
  GROUP_COURSE_LIST: {
    next(state, { payload }) {
      return {
        ...state,
        list: _.groupBy(state.list, ({ CrsYear, CrsSemester }) => (CrsYear + CrsSemester)),
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  GET_SCHEDULE: {
    next(state, { payload }) {
      return {
        ...state,
        schedule: payload,
        semester: Object.keys(payload)[0],
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  SET_SEMESTER: {
    next(state, { payload }) {
      return {
        ...state,
        semester: payload,
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  default: state => ({
    ...state,
  }),
}, initialState);
