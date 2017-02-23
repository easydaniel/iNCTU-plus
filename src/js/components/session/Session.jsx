import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import _ from 'lodash'

@Radium
export default class extends Component {
    static propTypes = {
        postSession: PropTypes.func.isRequired
    };
    constructor (props) {
        super(props)
        this.postSession = this.postSession.bind(this)
    }
    postSession () {
        const data = new FormData(ReactDOM.findDOMNode(this.refs.sessionForm))
        this.props.postSession(data)
        .then(() => {
            return this.props.getsCourse({
                loginTicket: this.props.Session.LoginTicket,
                accountId: this.props.Session.AccountId,
                role: 'stu'
            })
        })
        .then(() => {
            const { info } = this.props.Course
            return Promise.all(_.map(info, (data, courseId) => {
                /*
                _.each(_.range(1, 5), (listType) => {
                    this.props.getsCourseHomework({
                        loginTicket: this.props.Session.LoginTicket,
                        accountId: this.props.Session.AccountId,
                        courseId: courseId,
                        listType: listType
                    })
                })
                _.each(_.range(1, 3), (bulType) => {
                    this.props.getsCourseAnnouncement({
                        loginTicket: this.props.Session.LoginTicket,
                        courseId: courseId,
                        bulType: bulType
                    })
                })
                */
                return this.props.getCourseTime({
                    loginTicket: this.props.Session.LoginTicket,
                    courseId: courseId
                })
            }))
        })
        .then(() => {
            this.props.groupsCourse()
        })
        .then(() => {
            this.props.getSchedule(this.props.Course.info)
        })
        .then(() => {
            this.props.setSemester('105上')
        })
    }
    render () {
        return (
            <form ref='sessionForm'>
                <input name="account" type="text" />
                <input name="password" type="password" />
                <div onClick={this.postSession}>Button</div>
            </form>
        )
    }
}
