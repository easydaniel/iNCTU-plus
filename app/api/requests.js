import qs from 'querystring';

const hostname = 'https://api.e3.nctu.me';
// const hostname = 'http://140.113.8.133/mService/service.asmx';

export const Login = (account, password) => fetch(`${hostname}/session/?${qs.stringify({ account, password })}`, {
  method: 'GET',
}).then(res => res.json());

export const GetCourseList = (loginTicket, accountId, role) => fetch(`${hostname}/courses/?${qs.stringify({ loginTicket, accountId, role })}`, {
  method: 'GET',
}).then(res => res.json());

export const GetCourseTime = (loginTicket, CourseId) => fetch(`${hostname}/course/time/?${qs.stringify({ loginTicket, CourseId })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(res => ({ ...res, CourseId }));

export const GetCourseHomework = (loginTicket, accountId, courseId, listType) => fetch(`${hostname}/homeworks/?${qs.stringify({ loginTicket, accountId, courseId, listType })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(res => ({ ...res, courseId, listType }));

export const GetCourseAnnouncement = (loginTicket, courseId, bulType) => fetch(`${hostname}/announcements/?${qs.stringify({ loginTicket, courseId, bulType })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(res => ({ ...res, courseId, bulType }));
