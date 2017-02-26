import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './stores/Store'
import { syncHistoryWithStore } from 'react-router-redux'
import Containers from './containers'

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
    render () {
        return (
            <Router history={history}>
                <Route path="/" component={Containers.App} >
                    <IndexRoute component={Containers.App} />
                    <Route path="signin" component={Containers.session.Session} />
                    <Route path="schedule" component={Containers.curriculum.Curriculum} />
                    <Route path=":id/announcement" component={Containers.announcement.Announcement} />
                </Route>
            </Router>
        )
    }
}
