import querystring from 'querystring';
import _ from 'lodash';
import {
  modiftyData,
} from './utils';

const hostname = 'https://api.e3.nctu.me';
// const hostname = 'http://140.113.8.133/mService/service.asmx';

export const Login = (account, password) => fetch(`${hostname}/session/?${querystring.stringify({ account, password })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(({ AccountData }) => modiftyData(AccountData))
  .catch(error => console.log('login', error));

export const GetCourseInfo = (loginTicket, accountId, role) => fetch(`${hostname}/courses/?${querystring.stringify({ loginTicket, accountId, role })}`, {
  method: 'GET',
}).then(res => res.json())
  .then(({ ArrayOfCourseData: { CourseData } }) => Promise.all(CourseData.map(
    async (Course) => {
      const { CourseId } = Course;
      /* Course Time */
      const { ArrayOfCourseTimeData: { CourseTimeData } } = await fetch(`${hostname}/course/time/?${querystring.stringify({ loginTicket, CourseId })}`, {
        method: 'GET',
      }).then(res => res.json())
        .catch(err => console.log('time', err));
      /* Homework */
      const hwk = await Promise.all(_.map([1, 2, 3, 4], listType => fetch(`${hostname}/homeworks/?${querystring.stringify({ loginTicket, accountId, courseId: CourseId, listType })}`, {
        method: 'GET',
      }).then(res => res.json())
        .then(({ ArrayOfStuHomeworkData: StuHomeworkData }) => modiftyData(StuHomeworkData))
        .then(({ StuHomeworkData }) => (StuHomeworkData || []))
        .catch(err => console.log('homework', err))));
      const HomeworkData = {};
      _.each(['undone', 'peer', 'overdue', 'done'], (type, idx) => {
        HomeworkData[type] = hwk[idx];
      });
      /* Announce */
      const anc = await Promise.all(_.map([1, 2], bulType => fetch(`${hostname}/announcements/?${querystring.stringify({ loginTicket, courseId: CourseId, bulType })}`, {
        method: 'GET',
      }).then(res => res.json())
        .then(({ ArrayOfBulletinData: BulletinData }) => modiftyData(BulletinData))
        .then(({ BulletinData }) => (BulletinData || []))
        .catch(err => console.log('announce', err))));
      const AnnouncementData = _.flatten(anc);
      return { ...Course, CourseTimeData, HomeworkData, AnnouncementData };
    },
  )))
  .then(CourseList => _.groupBy(CourseList, ({ CrsYear, CrsSemester }) => (CrsYear + CrsSemester)))
  .catch(err => console.log('course', err));
