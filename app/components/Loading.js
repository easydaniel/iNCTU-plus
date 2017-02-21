import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Loading extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(157, 139, 220)' }}>
        <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>
          正在取得資料...
        </Text>
      </View>
    );
  }
}

export default Loading;
