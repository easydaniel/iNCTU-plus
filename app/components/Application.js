import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Store
import configureStore from '../store';

// Components
import Login from './Login';
import Schedule from './Schedule';
import CourseList from './CourseList';

import { Text, View } from 'react-native';

import styles from '../styles/application';

// TabIcon
const ScheduleTabIcon = ({ selected, title }) => (
  <View>
    <Ionicons
      style={{ justifyContent: 'center', alignSelf: 'center', color: selected ? 'red' : 'black' }}
      name="ios-list-box-outline"
      size={25}
    />
    <Text style={{ alignSelf: 'center', color: selected ? 'red' : 'black' }}>{title}</Text>
  </View>
);

const CourseTabIcon = ({ selected, title }) => (
  <View>
    <Ionicons
      style={{ justifyContent: 'center', alignSelf: 'center', color: selected ? 'red' : 'black' }}
      name="ios-book-outline"
      size={25}
    />
    <Text style={{ alignSelf: 'center', color: selected ? 'red' : 'black' }}>{title}</Text>
  </View>
);

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    const { isLoading, store } = this.state;
    return isLoading ? null : (
      <Provider store={store}>
        <Router>
          <Scene
            hideNavBar
            key="root"
          >
            {/* Login Scene */}
            <Scene
              key="login"
              component={Login}
              initial
              type="reset"
            />
            <Scene
              key="tabbar"
              type="replace"
              tabs
              tabBarStyle={styles.tabBar}
            >
              <Scene
                key="scheduleTab"
                title="功課表"
                icon={ScheduleTabIcon}
                hideNavBar
              >
                <Scene
                  key="schedule"
                  component={Schedule}
                />
              </Scene>
              <Scene
                key="courseTab"
                title="課程資訊"
                icon={CourseTabIcon}
                hideNavBar
              >
                <Scene
                  key="course"
                  component={CourseList}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
