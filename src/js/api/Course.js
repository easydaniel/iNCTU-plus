import ApiFetch from './Base';

export default {
  gets: data => ApiFetch('/courses/', {
    body: data,
  }),
  Time: {
    get: data => ApiFetch('/course/time/', {
      body: data,
    }),
  },
  Homework: {
    gets: data => ApiFetch('/course/homeworks/', {
      body: data,
    }),
  },
};
