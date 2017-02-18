import querystring from 'querystring';
import {
  parseLogin,
  parseCourseInfo,
  parseCourseTime,
} from './xmlparser';

// const host = 'http://140.113.66.97:3019/';
const hostname = 'http://140.113.8.133/mService/service.asmx';

export const Login = (account, password) => fetch(`${hostname}/Login?${querystring.stringify({ account, password })}`, {
  method: 'GET',
}).then(res => res.text())
  .then(xml => parseLogin(xml));

export const GetCourseInfo = (loginTicket, accountId, role) => fetch(`${hostname}/GetCourseList?${querystring.stringify({ loginTicket, accountId, role })}`, {
  method: 'GET',
}).then(res => res.text())
  .then(xml => parseCourseInfo(xml))
  .then(courses => Promise.all(courses.map(
    async (course) => {
      const { CourseId } = course;
      const info = await fetch(`${hostname}/GetCourseTime?${querystring.stringify({ loginTicket, CourseId })}`, {
        method: 'GET',
      }).then(res => res.text())
        .then(xml => parseCourseTime(xml));
      return { ...course, ...info };
    })));
