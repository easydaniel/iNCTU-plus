import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
} from 'react-native';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class CourseList extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(157, 139, 220)' }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF' }}>
          正在努力趕工ing
        </Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
