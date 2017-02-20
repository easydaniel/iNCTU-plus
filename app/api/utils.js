import _ from 'lodash';

export const sectionMap = {
  A: {
    from: '08:00',
    to: '08:50',
  },
  B: {
    from: '09:00',
    to: '09:50',
  },
  C: {
    from: '10:10',
    to: '11:00',
  },
  D: {
    from: '11:10',
    to: '12:00',
  },
  E: {
    from: '13:20',
    to: '14:10',
  },
  F: {
    from: '14:20',
    to: '15:10',
  },
  G: {
    from: '15:30',
    to: '16:20',
  },
  H: {
    from: '16:30',
    to: '17:20',
  },
  I: {
    from: '18:30',
    to: '19:20',
  },
  J: {
    from: '19:30',
    to: '20:20',
  },
  K: {
    from: '20:30',
    to: '21:20',
  },
  X: {
    from: '12:20',
    to: '13:10',
  },
  M: {
    from: '06:00',
    to: '06:50',
  },
  N: {
    from: '07:00',
    to: '07:550',
  },
  Y: {
    from: '17:30',
    to: '18:20',
  },
  L: {
    from: '21:30',
    to: '22:20',
  },
};

export const modiftyData = data => new Promise((resolve, reject) => {
  try {
    const modified = _.pickBy(data, (value, key) => !_.startsWith(key, '@'));
    resolve(modified);
  } catch (e) {
    reject({ msg: 'error parsing data', data });
  }
});

export const SortByDay = (list) => {
  const week = [[], [], [], [], [], [], []];
  _.each(list, ({ CourseName, CourseTimeData }) => {
    [1, 2, 3, 4, 5, 6, 7].forEach((idx) => {
      if (_.find(CourseTimeData, ['WeekDay', idx.toString()])) {
        const { RoomNo } = _.head(CourseTimeData);
        week[idx - 1].push({
          CourseName,
          RoomNo,
          Sections: _.filter(CourseTimeData,
             ({ WeekDay }) => WeekDay === idx.toString()).map(({ Section }) => Section),
        });
      }
    });
  });
  return week.map(w => _.sortBy(w, ({ Sections }) => sectionMap[_.head(Sections)].from));
};

export const GetSchedule = (schedule) => {
  const result = {};
  _.each(schedule, (value, key) => {
    result[key] = SortByDay(value);
  });
  return result;
};
