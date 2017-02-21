import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import Octicons from 'react-native-vector-icons/Octicons';
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

  renderSeparator(sectionId, rowId) {
    const { list, semester } = this.props.course;
    return ((list[semester].length - 1).toString() === rowId ? null :
    <View key={rowId} style={styles.separator} />);
  }

  renderRow(course) {
    const { info } = this.props.course;
    const { CourseId } = course;
    const { CourseName, TeacherName } = info[CourseId];
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.course({ CourseId })}
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const { list, semester } = this.props.course;
    return (!semester ? <Loading /> :
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
        dataSource={ds.cloneWithRows(list[semester])}
        renderRow={row => this.renderRow(row)}
        renderSeparator={(sectionId, rowId) => this.renderSeparator(sectionId, rowId)}
      />
    </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
