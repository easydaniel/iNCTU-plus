import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

export default CSSModules(class Inctu extends Component {
    constructor (props) {
        super(props)
        this.refreshData = this.refreshData.bind(this)
        this.checkType = this.checkType.bind(this)
        this.mapType = this.mapType.bind(this)
        this.mapId = this.mapId.bind(this)
        this.state = {
            fakeData: [],
            WeekDay: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ],
            periodList: [
                {
                    'start': '8:00',
                    'end': '8:50'
                },
                {
                    'start': '9:00',
                    'end': '9:50'
                },
                {
                    'start': '10:10',
                    'end': '11:00'
                },
                {
                    'start': '11:10',
                    'end': '12:00'
                },
                {
                    'start': '12:20',
                    'end': '13:10'
                },
                {
                    'start': '13:20',
                    'end': '14:10'
                },
                {
                    'start': '14:20',
                    'end': '15:10'
                },
                {
                    'start': '15:30',
                    'end': '16:20'
                },
                {
                    'start': '16:30',
                    'end': '17:20'
                },
                {
                    'start': '17:30',
                    'end': '18:20'
                }
            ]
        }
    }
    checkType (val) {
        switch (val.slice(0, 1)) {
            case '1':
                return 1
            case '7':
                return 2
            case '8':
                return 3
            default:
                return 4
        }
    }
    mapType (val, list) {
        let target = 1
        list.map((el) => {
            if (el.courseName === val) {
                target = el.courseType
            }
        })
        return target
    }
    mapId (val, list) {
        let target = ''
        list.map((el) => {
            if (el.courseName === val) {
                target = el.courseId
            }
        })
        return target
    }
    refreshData () {
        let typeList = []
        let tempDataId = this.props.Course.info
        for (var key in tempDataId) {
            var obj = tempDataId[key]
            if (obj.CrsYear === '105' && obj.CrsSemester === '下') {
                typeList.push({
                    courseName: obj.CourseName,
                    courseType: this.checkType(obj.CourseNo),
                    courseId: obj.CourseId
                })
            }
        }

        let tempData = this.props.Course.schedule['105下']
        let pushData = []
        tempData.map((dayObj) => {
            let oneDayList = []
            dayObj.map((el) => {
                let classObj = {
                    id: '',
                    name: '',
                    start_time: '',
                    end_time: '',
                    start_period: 0,
                    duration: 0,
                    type: 1
                }
                let sp = (el.Sections[0].charCodeAt(0) - 64)
                sp = (sp > 4 ? sp + 1 : sp)
                classObj['name'] = el.CourseName
                classObj['start_period'] = sp
                classObj['duration'] = el.Sections.length
                classObj['start_time'] = this.state.periodList[sp - 1]['start']
                classObj['end_time'] = this.state.periodList[sp + el.Sections.length - 2]['end']
                classObj['id'] = this.mapId(el.CourseName, typeList)
                classObj['type'] = this.mapType(el.CourseName, typeList)
                oneDayList.push(classObj)
            })
            pushData.push(oneDayList)
        })
        console.log(pushData)
        this.setState({fakeData: pushData})
    }
    componentDidMount () {
        this.refreshData()
    }
    render () {
        return (
            <div>
                {/* <div onClick={this.refreshData}>reFresh</div> */}
                <div className="cd-schedule" style={{
                    textAlign: 'left'
                }}>
                    <div className="timeline">
                        <ul>
                            <li><span>08:00</span></li>
                            <li><span>09:00</span></li>
                            <li><span>10:10</span></li>
                            <li><span>11:10</span></li>
                            <li><span>12:00</span></li>
                            <li><span>13:20</span></li>
                            <li><span>14:20</span></li>
                            <li><span>15:30</span></li>
                            <li><span>16:30</span></li>
                            <li><span>17:20</span></li>
                            <li><span>18:30</span></li>
                            <li><span>19:20</span></li>
                            <li><span>20:30</span></li>
                            <li><span>21:20</span></li>
                        </ul>
                    </div>
                    <div className="events">
                        <ul>
                            {
                                this.state.fakeData.map((el, id) =>
                                    <li key={id} className="events-group">
                                        <div className="top-info"><span>{this.state.WeekDay[id]}</span></div>
                                        <ul>
                                            {
                                                el.map((box, index) =>
                                                    <li
                                                        key={index}
                                                        className="single-event"
                                                        data-start={box.start_time}
                                                        data-end={box.end_time}
                                                        data-event={`event-` + box.type}
                                                        style={{
                                                            top: (() => (box.start_period - 1) * 80)(),
                                                            height: (() => box.duration * 80)()
                                                        }}><Link to={`${box.id}/announcement`}>
                                                            <span className="event-date">{box.start_time} - {box.end_time}</span>
                                                            <em className="event-name">{box.name}</em>
                                                    </Link></li>
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
// })
}, require('./../../../scss/curriculum/scss/style.scss'))
