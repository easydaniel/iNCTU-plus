import _ from 'lodash';

export const parseLogin = xml => new Promise((resolve, reject) => {
  try {
    resolve({
      LoginTicket: xml.match(/<LoginTicket>(.*)<\/LoginTicket>/)[1],
      AccountId: xml.match(/<AccountId>(.*)<\/AccountId>/)[1],
      DepartId: xml.match(/<DepartId>(.*)<\/DepartId>/)[1],
      Account: xml.match(/<Account>(.*)<\/Account>/)[1],
      Name: xml.match(/<Name>(.*)<\/Name>/)[1],
      Password: xml.match(/<Password>(.*)<\/Password>/)[1],
      OfficeTitle: xml.match(/<OfficeTitle>(.*)<\/OfficeTitle>/)[1].trim(),
    });
  } catch (e) {
    reject({});
  }
});

export const parseCourseTime = xml => new Promise((resolve, reject) => {
  try {
    resolve({
      RoomNo: xml.match(/<RoomNo>(.*)<\/RoomNo>/)[1].trim(),
      CrsTime: _.zipWith(xml.match(/<WeekDay>(.*)<\/WeekDay>/g).map(item => item.match(/<WeekDay>(.*)<\/WeekDay>/)[1]),
                          xml.match(/<Section>(.*)<\/Section>/g).map(item => item.match(/<Section>(.*)<\/Section>/)[1]),
                          (day, section) => ({ day, section })),
    });
  } catch (e) {
    reject({});
  }
});

export const parseCourseInfo = xml => new Promise((resolve, reject) => {
  try {
    resolve(
      _.zipWith(
        xml.match(/<CourseId>(.*)<\/CourseId>/g).map(item => item.match(/<CourseId>(.*)<\/CourseId>/)[1]),
        xml.match(/<PmtCrsNo>(.*)<\/PmtCrsNo>/g).map(item => item.match(/<PmtCrsNo>(.*)<\/PmtCrsNo>/)[1]),
        xml.match(/<CourseNo>(.*)<\/CourseNo>/g).map(item => item.match(/<CourseNo>(.*)<\/CourseNo>/)[1]),
        xml.match(/<CourseName>(.*)<\/CourseName>/g).map(item => item.match(/<CourseName>(.*)<\/CourseName>/)[1]),
        xml.match(/<CrsYear>(.*)<\/CrsYear>/g).map(item => item.match(/<CrsYear>(.*)<\/CrsYear>/)[1]),
        xml.match(/<CrsSemester>(.*)<\/CrsSemester>/g).map(item => item.match(/<CrsSemester>(.*)<\/CrsSemester>/)[1]),
        xml.match(/<TeacherName>(.*)<\/TeacherName>/g).map(item => item.match(/<TeacherName>(.*)<\/TeacherName>/)[1]),
        (CourseId, PmtCrsNo, CourseNo, CourseName, CrsYear, CrsSemester, TeacherName) => ({
          CourseId, PmtCrsNo, CourseNo, CourseName, CrsYear, CrsSemester, TeacherName,
        }),
      ),
    );
  } catch (e) {
    reject({});
  }
});

export const SortByDay = (schedule) => {
  const result = {};
  _.forEach(schedule, (value, key) => {
    const week = [[], [], [], [], [], [], []];
    value.forEach(({ CourseName, CrsTime, RoomNo }) => {
      [1, 2, 3, 4, 5, 6, 7].forEach((idx) => {
        if (_.find(CrsTime, ['day', idx.toString()])) {
          week[idx - 1].push({
            CourseName,
            RoomNo,
            Section: _.filter(CrsTime,
               ({ day }) => day === idx.toString()).map(({ section }) => section),
          });
        }
      });
    });
    // #TODO Sort time sections
    result[key] = week;
  });
  return result;
};

export const GetSchedule = schedule => SortByDay(_.groupBy(schedule.map(
  ({ CourseName, CrsYear, CrsSemester, CrsTime, RoomNo }) => ({
    CourseName, CrsYear, CrsSemester, CrsTime, RoomNo })),
  ({ CrsYear, CrsSemester }) => (CrsYear + CrsSemester)));
