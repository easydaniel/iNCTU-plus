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
} from 'react-native';

import Loading from './Loading';

import styles from '../styles/schedule';
import * as CourseActions from '../actions/course';

import { sectionMap } from '../utils';

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...CourseActions,
}, dispatch);

const { width } = Dimensions.get('window');

class Schedule extends Component {

  constructor(props) {
    super(props);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.state = {
      loading: true,
      delay: true,
      current: null,
    };
  }

  componentWillMount() {
    const { user: { LoginTicket, AccountId } } = this.props.auth;
    const current = (new Date().getDay() + 8) % 8;
    this.setState({ current });
    this.props.getCourseList(LoginTicket, AccountId, 'stu')
      .then(() => {
        const { list } = this.props.course;
        return Promise.all(_.map(list, (data, courseId) => {
          _.each(_.range(1, 5), (listType) => {
            this.props.getCourseHomework(LoginTicket, AccountId, courseId, listType);
          });
          _.each(_.range(1, 3), (bulType) => {
            this.props.getCourseAnnouncement(LoginTicket, courseId, bulType);
          });
          return this.props.getCourseTime(LoginTicket, courseId);
        }));
      })
      .then(() => {
        const { list } = this.props.course;
        this.props.groupCourseList();
        return this.props.getSchedule(list);
      })
      .then(() => this.initSchedule())
      .then(() => this.setState({ loading: false }))
      .done(() => this.dayScrollView.scrollTo({ x: (current - 1) * width, animated: false }));
  }

  initSchedule() {
    const { schedule } = this.props.course;
    // Picker init
    Picker.init({
      pickerData: Object.keys(schedule),
      pickerTitleText: '選擇學期',
      pickerConfirmBtnText: '確定',
      pickerCancelBtnText: '',
      onPickerSelect: ([semester]) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.props.setSemester(semester);
      },
    });
    Picker.hide();
    // Make sure scroll event not fired
    setTimeout(() => this.setState({ delay: false }), 200);
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
    this.dayScrollView.scrollTo({ x: (current - 1) * width, animated: false });
  }

  getTimeString(section) {
    return `${sectionMap[_.head(section)].from} ~ ${sectionMap[_.last(section)].to}`;
  }

  render() {
    const { loading, current } = this.state;
    const left = 15 + (width / 7) * (current - 1);
    const { schedule, semester } = this.props.course;
    return (loading ? <Loading /> :
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
            {semester}<EntypoIcons name="chevron-down" size={20} />
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
        ref={(c) => { this.dayScrollView = c; }}
        onScroll={evt => this.handleScroll(evt)}
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {
            schedule[semester].map((list, idx) => (
              <View
                style={styles.pageContainer}
                key={idx}
              >
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.dayContainer}
                >
                  {(
                    list.length === 0 ?
                      <View>
                        <Text />
                      </View> :
                    list.map(({ CourseName, Sections, RoomNo }) => (
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
                          <Text style={styles.courseTime}>{this.getTimeString(Sections)}</Text>
                          <Text style={styles.courseSection}>{`時段: ${Sections.join('')}`}</Text>
                        </MaterialCommunityIcons.Button>
                      </View>
                    ))
                  )}
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
