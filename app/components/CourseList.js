import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Octicons from 'react-native-vector-icons/Octicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Picker from 'react-native-picker';
import {
  View,
  Text,
  ListView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import Loading from './Loading';

import styles from '../styles/course';
import * as CourseActions from '../actions/course';

const mapStateToProps = state => ({
  auth: state.auth,
  course: state.course,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...CourseActions,
}, dispatch);

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class CourseList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      semester: null,
    };
  }

  componentWillMount() {
    const { user: { LoginTicket, AccountId } } = this.props.auth;
    this.props.getCourseInfo(LoginTicket, AccountId, 'stu')
      .then(() => this.initList());
  }

  initList() {
    const { list } = this.props.course;
    this.setState({ semester: Object.keys(list)[0] });
    Picker.init({
      pickerData: Object.keys(list),
      pickerTitleText: '選擇學期',
      pickerConfirmBtnText: '確定',
      pickerCancelBtnText: '',
      onPickerSelect: ([semester]) => {
        this.setState({
          semester,
        });
      },
    });
    Picker.hide();
  }

  renderRow(course) {
    const { CourseName, TeacherName } = course;
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.course({ course })}
      >
        <View style={styles.rowContainer}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseName}>
              {CourseName}
            </Text>
          </View>
          <View style={styles.newInfoContainer}>
            <Text style={styles.teacherName}>
              {TeacherName}
            </Text>
            <View style={styles.newInfo} />
            <View style={styles.homework}>
              <Octicons
                name="pencil"
                size={16}
              />
              <Text>
                {Math.floor(Math.random() * 5)}
              </Text>
              <Text style={{ marginLeft: 5, color: 'rgba(0, 0, 0, .3)' }}>
                03/05 20:30
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const { list } = this.props.course;
    const { semester } = this.state;
    if (!list || !semester) {
      return <Loading />;
    }
    const dataSource = ds.cloneWithRows(list[semester]);
    return (
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <TouchableHighlight
            style={styles.listSelect}
            underlayColor={'transparent'}
            onPress={() => Picker.toggle()}
          >
            <Text
              style={styles.listSelectText}
            >
              {semester}<EntypoIcons name="chevron-down" size={20} />
            </Text>
          </TouchableHighlight>
        </View>
        <ListView
          style={styles.listContainer}
          enableEmptySections
          dataSource={dataSource}
          renderRow={row => this.renderRow(row)}
          renderSeparator={(sectionId, rowId) => ((list[semester].length - 1).toString() === rowId ? null :
          <View key={rowId} style={styles.separator} />)}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
