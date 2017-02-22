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
}, initialState);
