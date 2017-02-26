import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import Parallax from 'parallax-js'

@Radium
// export default class extends Component {
export default CSSModules(class Session extends Component {
    static propTypes = {
        postSession: PropTypes.func.isRequired
    };
    constructor (props) {
        super(props)
        this.postSession = this.postSession.bind(this)
        this.state = {
            img_src: [
                {
                    'src': 'https://2016.oneis.us/images/sphere-small.png',
                    'depth': 0.35
                },
                {
                    'src': 'https://2016.oneis.us/images/sphere-medium.png',
                    'depth': 0.35
                },
                {
                    'src': 'http://i.imgur.com/i7Q1i97.png',
                    'depth': 0.45
                },
                {
                    'src': 'http://i.imgur.com/D07RorC.png',
                    'depth': 0.5
                },
                {
                    'src': 'http://i.imgur.com/qeOC0Ua.png',
                    'depth': 0.75
                },
                {
                    'src': 'http://i.imgur.com/Ut8kKSs.png',
                    'depth': 0.25
                },
                {
                    'src': 'https://2016.oneis.us/images/sphere-small.png',
                    'depth': 0.35
                },
                {
                    'src': 'https://2016.oneis.us/images/sphere-small.png',
                    'depth': 0.65
                }
            ]
        }
    }
    postSession (event) {
        event.preventDefault()
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
        .then(() => {
            this.props.router.push('/schedule')
        })
    }
    componentDidMount () {
        this.parallax = new Parallax(this.refs.ul)
    }
    componentWillUnmount () {
        this.parallax.disable()
    }
    render () {
        return (
            <div className="login_container">
                <div className="login_front">
                    <h1>
                        Brand<br/>
                        New<br/>
                        E3
                    </h1>
                    <form ref='sessionForm'>
                        <input name="account" type="text" />
                        <input name="password" type="password" />
                        <li className="submit_btn" onClick={this.postSession}>
                            <div className="caption_wrapper">
                                <h5>Submit</h5>
                                <span></span>
                            </div>
                        </li>
                    </form>
                </div>
                <div className="login_bg">
                    <ul ref='ul'>
                        {
                            this.state.img_src.map((el, id) => (
                                <li
                                    key={id}
                                    className="layer"
                                    data-depth={el.depth}
                                    style={{
                                        'top': (() => ((71 * Math.random()) + '%'))(),
                                        'left': (() => ((71 * Math.random()) + '%'))(),
                                        'width': (() => ((30 * Math.random()) + '%'))()
                                    }}
                                >
                                    <img src={el.src}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}, require('./Session.styl'))
