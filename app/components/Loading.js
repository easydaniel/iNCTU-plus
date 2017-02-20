import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Loading extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Loading
        </Text>
      </View>
    );
  }
}

export default Loading;
