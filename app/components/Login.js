import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard,
} from 'react-native';

import styles from '../styles/auth';
import * as AuthActions from '../actions/auth';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
}, dispatch);

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      status: 'LOGIN',
    };
  }

  login() {
    const { account, password } = this.state;
    this.setState({ status: 'LOGGING IN' });
    this.props.login(account, password)
      .done(({ error }) => (error ? this.setState({ status: 'RETRY' }) : Actions.tabbar()));
  }

  render() {
    const { account, password, status } = this.state;
    const { user } = this.props.auth;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              iNCTU+
            </Text>
          </View>
          <View style={styles.loginContainer}>
            <Sae
              label={'學號'}
              iconClass={Icon}
              iconName={'user'}
              iconColor={'white'}
              style={styles.input}
              labelStyle={{ color: 'white' }}
              inputStyle={{ fontWeight: 'bold' }}
              onChangeText={account => this.setState({ account })}
              value={account}
              keyboardType="numeric"
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <Sae
              label={'密碼'}
              iconClass={Icon}
              iconName={'lock'}
              iconColor={'white'}
              style={styles.input}
              labelStyle={{ color: 'white' }}
              inputStyle={{ fontWeight: 'bold' }}
              onChangeText={password => this.setState({ password })}
              value={password}
              secureTextEntry
              autoCapitalize={'none'}
              autoCorrect={false}
              onSubmitEditing={() => this.login()}
            />
          </View>

          <TouchableHighlight
            style={styles.actionContainer}
            underlayColor={'#FFFFFF'}
            activeOpacity={0.6}
            onPress={() => this.login()}
          >
            <Text style={styles.action}>
              {status}
            </Text>
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
