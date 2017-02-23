import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'

@Radium
export default class extends Component {
    render () {
        return (
            <StyleRoot>
                <Containers.session.Session/>
                <Containers.section.Curriculum/>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}
