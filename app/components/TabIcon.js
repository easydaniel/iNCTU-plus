import React from 'react';
import { View, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from 'app/styles/application';

export const ScheduleTabIcon = ({ selected, title }) => (
  <View style={styles.tabContainer}>
    <SimpleLineIcons
      style={{ justifyContent: 'center', alignSelf: 'center', color: selected ? 'red' : 'black' }}
      name="calendar"
      size={25}
    />
    <Text style={{ alignSelf: 'center', color: selected ? 'red' : 'black' }}>{title}</Text>
  </View>
);

export const CourseTabIcon = ({ selected, title }) => (
  <View style={styles.tabContainer}>
    <SimpleLineIcons
      style={{ justifyContent: 'center', alignSelf: 'center', color: selected ? 'red' : 'black' }}
      name="book-open"
      size={25}
    />
    <Text style={{ alignSelf: 'center', color: selected ? 'red' : 'black' }}>{title}</Text>
  </View>
);

export const SettingTabIcon = ({ selected, title }) => (
  <View style={styles.tabContainer}>
    <SimpleLineIcons
      style={{ justifyContent: 'center', alignSelf: 'center', color: selected ? 'red' : 'black' }}
      name="settings"
      size={25}
    />
    <Text style={{ alignSelf: 'center', color: selected ? 'red' : 'black' }}>{title}</Text>
  </View>
);
