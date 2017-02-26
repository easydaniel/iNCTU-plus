import { connect } from 'react-redux'
import Components from 'components'

const mapStateToProps = (state, ownProps) => ({
    Course: state.Course
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Components.announcement.Announcement)
