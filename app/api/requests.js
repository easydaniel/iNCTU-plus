import querystring from 'querystring';
import _ from 'lodash';
import {
  modiftyAccountData,
} from './utils';

const hostname = 'https://api.e3.nctu.me';
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
      const { CourseId, CourseName } = course;
      const time = await fetch(`${hostname}/course/time/?${querystring.stringify({ loginTicket, CourseId })}`, {
        methdo: 'GET',
      }).then(res => res.json());
      console.log(CourseId, CourseName, loginTicket, accountId);
      // const hwk = {}
      ['wait', 'peer', 'overdue', 'done'].forEach(async (type, idx) => {
        await fetch(`${hostname}/homeworks/?${querystring.stringify({ loginTicket, accountId, CourseId, listType: (idx + 1) })}`, {
          method: 'GET',
        }).then(res => res.json())
        .then(res => console.log(res));
      });
      // console.log(hwk);
      const { ArrayOfCourseTimeData: { CourseTimeData } } = time;
      return { ...course, CourseTimeData };
    },
  )))
  .then(CourseList => _.groupBy(CourseList, ({ CrsYear, CrsSemester }) => (CrsYear + CrsSemester)));
