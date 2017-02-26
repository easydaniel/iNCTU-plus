import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import _ from 'lodash'

export default CSSModules(class Inctu extends Component {
    constructor (props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            course: {},
            isNavActive: false
        }
    }
    toggleMenu () {
        this.setState({isNavActive: !this.state.isNavActive})
    }
    componentDidMount () {
        // let p = this.props.params.id
        // this.setState({course: this.props.Course.info[p]})
    }
    render () {
        return (
            <div>
                <nav onClick={this.toggleMenu} className={this.state.isNavActive ? 'cd-stretchy-nav nav-is-visible' : 'cd-stretchy-nav'}>
                    <a className="cd-nav-trigger" href="#0">
                        Menu<span aria-hidden="true"></span>
                    </a>
                    <ul>
                        <li><a href="#0" className="active"><span>課程公告</span></a></li>
                        <li><a href="#0"><span>課程講義</span></a></li>
                        <li><a href="#0"><span>課程作業</span></a></li>
                        <li><a href="#0"><span>討論區</span></a></li>
                        <li><a href="#0"><span>其他</span></a></li>
                    </ul>

                    <span aria-hidden="true" className="stretchy-nav-bg"></span>
                </nav>
                <main className="cd-main-content">
                    <h1>{this.state.course.CourseName}</h1>
                </main>
                {/* <div>
                    {
                        _.map(this.state.course.Announcement, (el, id) => ((
                                <li key={id}>
                                    <span>{el.BeginDate}~{el.EndDate}</span>
                                    <h2>{el.Caption}</h2>
                                    <h3>{el.Content}</h3>
                                </li>
                            )
                        ))
                    }
                </div> */}
            </div>
        )
    }
}, require('./../../../scss/announcement/css/style.css'))
