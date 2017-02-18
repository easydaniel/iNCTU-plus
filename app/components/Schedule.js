import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Picker from 'react-native-picker';
import {
  View,
  ScrollView,
  Text,
  LayoutAnimation,
  Dimensions,
  TouchableHighlight,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from '../styles/schedule';
import * as CourseActions from '../actions/course';

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...CourseActions,
}, dispatch);

const { width } = Dimensions.get('window');

const sectionMap = {
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


class Schedule extends Component {

  constructor(props) {
    super(props);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    const current = (new Date().getDay() + 8) % 8;
    this.state = {
      loading: true,
      delay: true,
      current,
      semester: '105上',
    };
    const { user: { LoginTicket, AccountId } } = this.props.auth;
    this.props.getCourseInfo(LoginTicket, AccountId, 'stu')
      .then(({ payload }) => this.props.getSchedule(payload))
      .then(() => this.setState({ loading: false }))
      .then(() => this.refs.dayScrollView.scrollTo({ x: (current - 1) * width, animated: false }))
      .then(() => this.initPicker())
      .then(() => { setTimeout(() => this.setState({ delay: false }), 200); });
  }

  initPicker() {
    const { schedule } = this.props.course;
    Picker.init({
      pickerData: Object.keys(schedule),
      pickerTitleText: '選擇學期',
      pickerConfirmBtnText: '確定',
      pickerCancelBtnText: '',
      onPickerSelect: ([semester]) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({
          semester,
        });
      },
    });
    Picker.hide();
  }

  handleScroll(evt) {
    Picker.hide();
    if (!this.state.delay) {
      const { x } = evt.nativeEvent.contentOffset;
      const { width } = evt.nativeEvent.layoutMeasurement;
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({
        current: Math.min(Math.max(Math.floor(x / width + 0.5) + 1, 0), 7),
      });
    }
  }

  handlePressIndicator(current) {
    this.refs.dayScrollView.scrollTo({ x: (current - 1) * width, animated: false });
  }

  getTimeString(time) {
    const sectionStr = time.map(({ section }) => section).join('');
    let from = null;
    let to = null;
    time.forEach(({ section }) => {
      if (!from) {
        from = sectionMap[section].from;
        to = sectionMap[section].to;
      } else {
        to = sectionMap[section].to;
      }
    });
    return `${from} ~ ${to}  時段: ${sectionStr}`;
  }

  render() {
    const { loading, current, semester } = this.state;
    const left = 15 + (width / 7) * (current - 1);
    const { schedule } = this.props.course;
    console.log(schedule);
    return (loading ? null :
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.scheduleActionContainer}>
        <TouchableHighlight
          style={styles.scheduleSelect}
          underlayColor={'transparent'}
          onPress={() => Picker.toggle()}
        >
          <Text
            style={styles.scheduleSelectText}
          >
            {semester}
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.dayNavigator}>
        {
          ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((value, index) => (
            <TouchableHighlight
              key={index}
              style={styles.dayNavigatorContainer}
              underlayColor={'transparent'}
              activeOpacity={0.5}
              onPressIn={() => this.handlePressIndicator(index + 1)}
            >
              <Text style={styles.dayNavigatorText}>
                {value}
              </Text>
            </TouchableHighlight>
          ))
        }
      </View>
      <View style={[styles.dayNavigatorIndicator, { left }]} />
      <ScrollView
        horizontal
        pagingEnabled
        ref="dayScrollView"
        onScroll={evt => this.handleScroll(evt)}
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {
          [1, 2, 3, 4, 5, 6, 7].map(data => (
            <View
              style={styles.pageContainer}
              key={data}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.dayContainer}
              >
                {
                  schedule[semester].map(({ CourseName, CrsTime, RoomNo }) => {
                    const time = _.filter(CrsTime, ({ day }) => day === data.toString());
                    return (time.length ?
                      <View key={CourseName} style={styles.timeContainer}>
                        <Text style={styles.courseName}>
                          {CourseName}
                        </Text>
                        <EntypoIcons.Button
                          style={styles.courseLocationContainer}
                          name="location"
                          backgroundColor={'transparent'}
                          color={'rgb(228,129,132)'}
                          size={18}
                        >
                          <Text style={styles.courseLocation}>{RoomNo}</Text>
                        </EntypoIcons.Button>
                        <MaterialCommunityIcons.Button
                          style={styles.courseTimeContainer}
                          name="clock"
                          backgroundColor={'transparent'}
                          color={'rgb(137,135,231)'}
                          size={18}
                        >
                          <Text style={styles.courseTime}>{this.getTimeString(time)}</Text>
                        </MaterialCommunityIcons.Button>
                      </View> : null);
                  })
                }
              </ScrollView>
            </View>
          ))
        }
      </ScrollView>
    </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
