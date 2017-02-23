import { connect } from 'react-redux'
import Actions from 'js/actions'
import Components from 'components'

const mapStateToProps = ({ Session, Course }) => ({ Session, Course })

const mapDispatchToProps = (dispatch) => ({
    postSession: (data) => dispatch(Actions.Session.post(data)),
    getsCourse: (data) => dispatch(Actions.Course.gets(data)),
    groupsCourse: () => dispatch(Actions.Course.groups()),
    getCourseTime: (data) => dispatch(Actions.Course.Time.get(data)),
    getsCourseHomework: (data) => dispatch(Actions.Course.Homework.gets(data)),
    getsCourseAnnouncement: (data) => dispatch(Actions.Course.Announcement.gets(data)),
    getSchedule: (data) => dispatch(Actions.Course.Schedule.get(data)),
    setSemester: (data) => dispatch(Actions.Course.Semester.set(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.session.Session)
