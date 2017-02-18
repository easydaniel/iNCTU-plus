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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(157, 139, 220)' }}>
        <Text style={{ fontSize: 30, color: '#FFFFFF' }}>
          正在努力趕工ing
        </Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);
