import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'

export default CSSModules(class Inctu extends Component {
    constructor (props) {
        super(props)
        this.show = this.show.bind(this)
        this.state = {
            course: {}
        }
    }
    show () {
        console.log(this.state.course.Announcement.new)
        _.map(this.state.course.Announcement.new, (el, id) => {
            console.log(el.Caption)
        })
        // console.log(this.state.course.Homework)
    }
    componentDidMount () {
        let p = this.props.params.id
        console.log(this.props.Course.info[p])
        this.setState({course: this.props.Course.info[p]})
    }
    render () {
        return (
            <div>
                <h1 onClick={this.show}>{this.state.course.CourseName}</h1>
                <div>
                    {
                        _.map(this.state.course.Announcement.new, (el, id) => {
                            <li key={id}>
                                <span>{el.BeginDate}~{el.EndDate}</span>
                                <h2>{el.Caption}</h2>
                                {/* <h3>{el.Content}</h3> */}
                            </li>
                        })
                    }
                </div>
                {/* <div>
                    {
                        _.map(this.state.course.Homework, (el, id) => {
                            <li key={id}>{el}</li>
                        })
                    }
                </div> */}
            </div>
        )
    }
})
