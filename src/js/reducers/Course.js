import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initialState = {
  info: null,
  list: null,
  schedule: null,
  semester: null,
  time: null,
};

export default handleActions({
  GETS_COURSE: {
    next(state, { payload }) {
      const { ArrayOfCourseData: { CourseData } } = payload;
      return {
        ...state,
        info: _.keyBy(
                _.map(
                  CourseData,
                  c => ({ ...c, Homework: {}, Announcement: {} })),
                'CourseId',
                ),
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  GROUPS_COURSE: {
    next(state) {
      return {
        ...state,
        list: _.groupBy(
          _.map(
            state.info,
            ({ CourseId, CrsYear, CrsSemester }) => ({ CourseId, CrsYear, CrsSemester }),
          ),
          ({ CrsYear, CrsSemester }) => (CrsYear + CrsSemester),
        ),
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
      const { courseId } = payload.request
      const { ArrayOfCourseTimeData: { CourseTimeData } } = payload;
      const CourseTime = _.map(
        CourseTimeData,
        ({ CourseName, CourseId, ...c }) => c,
      );
      return {
        ...state,
        info: {
          ...state.info,
          [courseId]: {
            ...state.info[courseId],
            CourseTime,
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
  GETS_COURSE_HOMEWORK: {
    next(state, { payload }) {
      const { courseId, listType } = payload.request;
      const { ArrayOfStuHomeworkData: { StuHomeworkData } } = payload;
      const type = ['undone', 'peer', 'overdue', 'done'];
      return {
        ...state,
        info: {
          ...state.info,
          [courseId]: {
            ...state.info[courseId],
            Homework: {
              ...state.info[courseId].Homework,
              [type[listType - 1]]: _.keyBy(StuHomeworkData, 'HomeworkId'),
            },
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
        info: {
          ...state.info,
          [courseId]: {
            ...state.info[courseId],
            Announcement: {
              ...state.info[courseId].Announcement,
              [type[bulType - 1]]: _.keyBy(BulletinData, 'BulletinId'),
            },
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
  GET_SCHEDULE: {
    next(state, { payload }) {
      const date = new Date();
      const CrsYear = date.getYear() - (date.getMonth() > 7 ? 11 : 12);
      const CrsSemester = (date.getMonth() > 7 ? '上' : '下');
      return {
        ...state,
        schedule: payload,
        semester: `${CrsYear}${CrsSemester}`,
      };
    },
    throw(state, { payload }) {
      return {
        ...state,
      };
    },
  },
  SET_SEMESETER: {
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
}, initialState);
