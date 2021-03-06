import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

class Course extends Component {

  render() {
    const { course } = this.props.navigationState;
    const { CourseName } = course;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(157, 139, 220)' }}>
        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>
          {CourseName}
        </Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
