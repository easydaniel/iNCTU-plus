import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'

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
