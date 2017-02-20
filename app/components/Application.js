import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

// Store
import configureStore from '../store';

// Components
import Login from './Login';
import Schedule from './Schedule';
import CourseList from './CourseList';
import Course from './Course';
import Basic from './Basic';

// tabIcons
import { CourseTabIcon, ScheduleTabIcon, SettingTabIcon } from './TabIcon';

import styles from '../styles/application';

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
                title="課程列表"
                icon={CourseTabIcon}
                hideNavBar
              >
                <Scene
                  key="courselist"
                  component={CourseList}
                />
                <Scene
                  key="course"
                  component={Course}
                />
              </Scene>
              <Scene
                key="settingTab"
                title="設定"
                icon={SettingTabIcon}
                hideNavBar
              >
                <Scene
                  key="setting"
                  component={Basic}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
