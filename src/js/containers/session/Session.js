import { connect } from 'react-redux'
import Actions from 'js/actions'
import Components from 'components'

const mapStateToProps = ({ Session, Course }) => ({ Session, Course })

const mapDispatchToProps = (dispatch) => ({
    postSession: (data) => dispatch(Actions.Session.post(data)),
    getsCourse: (data) => dispatch(Actions.Course.gets(data)),
    groupsCourse: (data) => dispatch(Actions.Course.groups(data)),
    getCourseTime: (data) => dispatch(Actions.Course.Time.get(data)),
    getsCourseHomework: (data) => dispatch(Actions.Course.Homework.gets(data)),
    getsCourseAnnouncement: (data) => dispatch(Actions.Course.Announcement.gets(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.session.Session)
