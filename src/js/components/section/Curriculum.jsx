import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class Inctu extends Component {
    constructor (props) {
        super(props)
        this.refreshData = this.refreshData.bind(this)
        this.state = {
            fakeData: [
                [
                    {
                        name: 'AI 人工智慧',
                        start_time: '9:00',
                        end_time: '12:00',
                        start_period: 0,
                        duration: 4,
                        type: 0
                    },
                    {
                        name: 'UX 使用者評估',
                        start_time: '13:00',
                        end_time: '15:00',
                        start_period: 8,
                        duration: 4,
                        type: 1
                    }
                ],
                [
                    {
                        name: '通識 痴漢智慧',
                        start_time: '10:00',
                        end_time: '12:00',
                        start_period: 2,
                        duration: 4,
                        type: 0
                    },
                    {
                        name: '語言 德文',
                        start_time: '13:00',
                        end_time: '15:00',
                        start_period: 8,
                        duration: 4,
                        type: 1
                    }
                ],
                [],
                [],
                []
            ],
            fakeDate: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ]
        }
    }
    refreshData () {
        console.log(this.props.Course.list)
    }
    render () {
        return (
            <div>
                <div onClick={this.refreshData}>reFresh</div>
                <div className="cd-schedule" style={{
                    textAlign: 'left'
                }}>
                    <div className="timeline">
                        <ul>
                            <li><span>09:00</span></li>
                            <li><span>09:30</span></li>
                            <li><span>10:00</span></li>
                            <li><span>10:30</span></li>
                            <li><span>11:00</span></li>
                            <li><span>11:30</span></li>
                            <li><span>12:00</span></li>
                            <li><span>12:30</span></li>
                            <li><span>13:00</span></li>
                            <li><span>13:30</span></li>
                            <li><span>14:00</span></li>
                            <li><span>14:30</span></li>
                            <li><span>15:00</span></li>
                            <li><span>15:30</span></li>
                            <li><span>16:00</span></li>
                            <li><span>16:30</span></li>
                            <li><span>17:00</span></li>
                            <li><span>17:30</span></li>
                            <li><span>18:00</span></li>
                        </ul>
                    </div>
                    <div className="events">
                        <ul>
                            {
                                this.state.fakeData.map((el, id) =>
                                    <li key={id} className="events-group">
                                        <div className="top-info"><span>{this.state.fakeDate[id]}</span></div>
                                        <ul>
                                            {
                                                el.map((box, index) =>
                                                    <li
                                                        key={index}
                                                        className="single-event"
                                                        data-start={box.start_time}
                                                        data-end={box.end_time}
                                                        data-event={box.type === 0 ? `event-1` : `event-4`}
                                                        style={{
                                                            top: (() => box.start_period * 50)(),
                                                            height: (() => box.duration * 50)()
                                                        }}>
                                                        <a href={`#` + index}>
                                                            <span className="event-date">{box.start_time} - {box.end_time}</span>
                                                            <em className="event-name">{box.name}</em>
                                                        </a>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}, require('./../../../scss/curriculum/scss/style.scss'))
