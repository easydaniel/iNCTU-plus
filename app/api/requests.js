import querystring from 'querystring';
import {
  modiftyAccountData,
} from './utils';

const hostname = 'https://e3api-tocknicsu.c9users.io';
// const hostname = 'http://140.113.8.133/mService/service.asmx';

export const Login = (account, password) => fetch(`${hostname}/session/?${querystring.stringify({ account, password })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(({ AccountData }) => (modiftyAccountData(AccountData)));

export const GetCourseInfo = (loginTicket, accountId, role) => fetch(`${hostname}/courses/?${querystring.stringify({ loginTicket, accountId, role })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(({ ArrayOfCourseData: { CourseData } }) => Promise.all(CourseData.map(
    async (course) => {
      const { CourseId } = course;
      const info = await fetch(`${hostname}/course/time/?${querystring.stringify({ loginTicket, CourseId })}`, {
        methdo: 'GET',
      }).then(res => res.json());
      const { ArrayOfCourseTimeData: { CourseTimeData } } = info;
      return { ...course, CourseTimeData };
    },
  )));
